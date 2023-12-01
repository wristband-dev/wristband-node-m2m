import {WristbandM2MClient} from 'wristband-node-m2m';

const APPLICATION_DOMAIN = 'appDomain';
const CLIENT_ID = 'clientId';
const CLIENT_SECRET = 'clientSecret';
// const APPLICATION_DOMAIN='invotasticb2bm2m-bryantesttenant.us.wristband.dev';
// const CLIENT_ID='dqroj4gedba73pymwdv5wdbjtm';
// const CLIENT_SECRET='1ff5068914201d80d000005eeda43ec4';

const wristbandM2MClient = new WristbandM2MClient({
  appDomain: APPLICATION_DOMAIN, clientId: CLIENT_ID, clientSecret: CLIENT_SECRET
});

(async () => {
  const result = await wristbandM2MClient.getToken();
  console.log(result);
  const result2 = await wristbandM2MClient.getToken();
  console.log(result2);
})();
