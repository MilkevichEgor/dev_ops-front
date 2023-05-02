export enum EnvTypes {
  development = 'development',
  production = 'production',
  stage = 'staging',
}

const envType: EnvTypes =
  process.env.REACT_APP_NODE_ENV as EnvTypes ||
  process.env.NODE_ENV ||
  EnvTypes.development;

const config = {
  apiBaseUrl: 'http://158.160.102.242:8080/api/',
};

// eslint-disable-next-line default-case
switch (envType) {
  case EnvTypes.production:
    config.apiBaseUrl = 'http://158.160.102.242:8080/api/';
    break;

  case EnvTypes.stage:
    config.apiBaseUrl = 'http://158.160.102.242:8080/api/';
    break;
}

export const isDev = envType === EnvTypes.development;

export default config;
