import {WristbandM2MSdk} from 'wristband-node-m2m';

const APPLICATION_DOMAIN = 'appDomain';
const CLIENT_ID = 'clientId';
const CLIENT_SECRET = 'clientSecret';

const sdk = new WristbandM2MSdk({
  appDomain: APPLICATION_DOMAIN, clientId: CLIENT_ID, clientSecret: CLIENT_SECRET
});

(async () => {
  const result = await sdk.getToken();
  console.log(result);
})();
