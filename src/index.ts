import { TokenApiService } from './TokenApiService'

type Config = {
  appDomain?: string;
  clientId?: string;
  clientSecret?: string;
};

export class WristbandM2MSdk {
  public tokenAPI: TokenApiService;

  constructor({ appDomain = '', clientId = '', clientSecret = '' }: Config) {
    this.tokenAPI = new TokenApiService(appDomain, clientId, clientSecret);
  }
  async getToken(){
    return await this.tokenAPI.getToken();
  }
  async clearToken(){
    return await this.tokenAPI.clearCache();
  }
}
