'use strict';

const retry = require('async/retry');

import {Constants} from './utils/constants';
import {localCache} from './cache/local-cache';
import {WristbandApiClient} from './WristbandApiClient';
import {getAccessTokenExpirationFromSeconds, isAccessTokenExpired} from './utils/util';

/*
 * This will set the Authorization header for any outgoing request.  The value is this M2M OAuth2 client's access token.
 * Before the token is set into the HTTP header, it will check if the access token is expired and refresh it as needed.
 */
export class TokenApiService {

  private wristbandApiClient : WristbandApiClient ;
  constructor(appDomain: string = '', clientId: string = '', clientSecret: string = '') {
    this.wristbandApiClient = new WristbandApiClient(appDomain, clientId, clientSecret);
  }
  async getToken() {

    const cachedAccessToken = localCache.get(Constants.ACCESS_TOKEN_KEY);
    const cachedTokenExpiration = localCache.get(Constants.ACCESS_TOKEN_EXPIRATION_KEY);

    // If the token exists and is not expired, then set the header and continue on.
    if (cachedAccessToken && !isAccessTokenExpired(cachedTokenExpiration)
    ) {
      console.info(`Access Token is obtained from cache`);
      return cachedAccessToken;
    }

    try {
      let currentAccessToken = null;
      // Check if another request already started acquiring a new access token.
      if (localCache.get(Constants.IS_ACCESS_TOKEN_REFRESHING_KEY)) {
        // Wait for up to 5 seconds for the outstanding token request to complete. Otherwise throw an error.
        await retry(
          {
            times: 3,
            interval: 500,
          },
          () => {
            if (localCache.get(Constants.IS_ACCESS_TOKEN_REFRESHING_KEY)) {
              throw new Error('Blocked by a prior request on acquiring a new token.');
            }

            console.info(`Token refresh is done waiting and can proceed`);
            currentAccessToken = localCache.get(Constants.ACCESS_TOKEN_KEY);
          },
          (err: any) => {
            if (err) {
              console.error(`Blocked by a prior request on acquiring a new token.`);
              throw err;
            }
          },
        );
        // Otherwise, make the request to Wristband to acquire a new access token.
      } else {
        // Lock the other requests from proceeding so as not to have requests fired off with an old access token.
        localCache.set(Constants.IS_ACCESS_TOKEN_REFRESHING_KEY, true);

        const tokenResponse = await  this.wristbandApiClient.axiosInstance.post('/v1/oauth2/token', Constants.CLIENT_CREDENTIALS_GRANT_TYPE);
        const {access_token: accessToken, expires_in: expiresIn} = tokenResponse.data;
        const tokenExpiration = getAccessTokenExpirationFromSeconds(expiresIn);

        localCache.set(Constants.ACCESS_TOKEN_KEY, accessToken);
        localCache.set(Constants.ACCESS_TOKEN_EXPIRATION_KEY, tokenExpiration);

        console.info('New access token acquired successfully');
        currentAccessToken = accessToken;
      }

      return currentAccessToken;
    } catch (err) {
      console.error('New access token failure was due to: ', err);
      throw new Error('Failed to acquire a new access token prior to making a downstream API request');
    } finally {
      // Always release the lock so other requests don't get blocked.
      localCache.set(Constants.IS_ACCESS_TOKEN_REFRESHING_KEY, false);
    }
  }

  async clearCache() {
    localCache.set(Constants.ACCESS_TOKEN_KEY, null);
    localCache.set(Constants.ACCESS_TOKEN_EXPIRATION_KEY, null);
    localCache.set(Constants.IS_ACCESS_TOKEN_REFRESHING_KEY, false);

  }
}
