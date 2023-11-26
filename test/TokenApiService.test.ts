import { WristbandM2MSdk } from '../src/index'
//import { WristbandM2MSdk } from 'wristband-node-m2m'
test('getToken', async() => {

  const APPLICATION_DOMAIN='appDomain';
  const CLIENT_ID='clientId';
  const CLIENT_SECRET='clientSecret';
  const sdk = new WristbandM2MSdk( {
    appDomain: APPLICATION_DOMAIN, clientId: CLIENT_ID, clientSecret: CLIENT_SECRET
  });

  const result = await sdk.getToken();
  const cachedResult = await sdk.getToken();
  expect(result).toEqual(cachedResult);
})

