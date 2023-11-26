import nock from 'nock';

import { WristbandM2MSdk } from '../src/index'


describe('test TokenApIs', () => {
  let sdk: any;

  beforeEach(() => {
    const APPLICATION_DOMAIN = 'localhost:3001';
    const CLIENT_ID = 'clientId';
    const CLIENT_SECRET = 'clientSecret';
    sdk = new WristbandM2MSdk({
      appDomain: APPLICATION_DOMAIN, clientId: CLIENT_ID, clientSecret: CLIENT_SECRET
    });

    nock.cleanAll();
  });

  describe('test tokenV1', () => {
    test('test api call', () => {
      const scope = nock('https://localhost:3001')
        .post('/api/v1/oauth2/token')
        .reply(200, "");
      return sdk.getToken().then((r: any) => expect(r).toEqual(undefined));
    });
  });


})



// import { WristbandM2MSdk } from '../src/index'
// //import { WristbandM2MSdk } from 'wristband-node-m2m'
// test('getToken', async() => {
//
//   const APPLICATION_DOMAIN='appDomain';
//   const CLIENT_ID='clientId';
//   const CLIENT_SECRET='clientSecret';
//   const sdk = new WristbandM2MSdk( {
//     appDomain: APPLICATION_DOMAIN, clientId: CLIENT_ID, clientSecret: CLIENT_SECRET
//   });
//
//   const result = await sdk.getToken();
//   const cachedResult = await sdk.getToken();
//   expect(result).toEqual(cachedResult);
// })

