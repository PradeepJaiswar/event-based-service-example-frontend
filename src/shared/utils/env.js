import constants from 'shared/constants';

export const getEnv = () => {
  const appOrigin = location.host;
  if (appOrigin === 'localhost') {
    return 'local';
  }
  return 'dev';
};

export const getApiBaseUrl = () => {
  const env = getEnv();
  if (env === 'local') {
    return constants.BASE_API_ENDPOINT_LOCAL;
  }
  return constants.BASE_API_ENDPOINT_DEV;
};

export const getWebSocketUrl = () => {
  const env = getEnv();
  if (env === 'local') {
    return constants.WS_ENDPOINT_LOCAL;
  }
  return constants.WS_ENDPOINT_DEV;
};

export default {
  getEnv,
  getApiBaseUrl,
  getWebSocketUrl,
};
