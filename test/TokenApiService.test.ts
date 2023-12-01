import nock from 'nock';

import { WristbandM2MClient } from '../src/index'

describe('test TokenApis', () => {
  let wristbandM2MClient: any;

  beforeEach(() => {
    const APPLICATION_DOMAIN = 'localhost:3001';
    const CLIENT_ID = 'clientId';
    const CLIENT_SECRET = 'clientSecret';
    wristbandM2MClient = new WristbandM2MClient({
      appDomain: APPLICATION_DOMAIN, clientId: CLIENT_ID, clientSecret: CLIENT_SECRET
    });

    nock.cleanAll();
  });

  describe('test tokenV1', () => {
    test('test api call', () => {
      const scope = nock('https://localhost:3001')
        .post('/api/v1/oauth2/token')
        .reply(200, "");
      return wristbandM2MClient.getToken().then((r: any) => expect(r).toEqual(undefined));
    });
  });
})


