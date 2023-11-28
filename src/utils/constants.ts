export class Constants
{
    static readonly ACCESS_TOKEN_EXPIRATION_KEY = 'accessTokenExpiration';
    static readonly ACCESS_TOKEN_KEY = 'accessToken';
    static readonly CLIENT_CREDENTIALS_GRANT_TYPE = 'grant_type=client_credentials';
    static readonly IS_ACCESS_TOKEN_REFRESHING_KEY = 'isAccessTokenRefreshing';
    static readonly FORM_URLENCODED_MEDIA_TYPE = 'application/x-www-form-urlencoded';
    static readonly JSON_MEDIA_TYPE = 'application/json;charset=UTF-8';
    static readonly M2M_CLIENT_API_URL = `http://localhost:6001/api`;
    static readonly WRISTBAND_API_URL = `https://${process.env.APPLICATION_DOMAIN}/api`;
};

