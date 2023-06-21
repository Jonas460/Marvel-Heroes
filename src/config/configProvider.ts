import { Api } from "./api";

export interface ConfigData {
  api: Api;
}

export class ConfigProvider {
  private static _config: ConfigData | undefined;

  static get config(): ConfigData {
    if (!this._config) this._initialize();

    return this._config as ConfigData;
  }

  private static _initialize() {
    this._config = {
      api: {
        baseUrl: process.env.REACT_APP_BASE_URL || "",
        publicKey: process.env.REACT_APP_PUBLIC_KEY || "",
        privateKey: process.env.REACT_APP_PRIVATE_KEY || "",
        resultsPage: Number(process.env.REACT_APP_RESULTS_PER_PAGE || 10),
      },
    };
  }
}
