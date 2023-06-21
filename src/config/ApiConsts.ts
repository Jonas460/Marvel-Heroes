import { MD5 } from "crypto-js";
import { ConfigProvider } from "./configProvider";

const getTimestamp = (): string => {
  return Date.now().toString();
};

const generateHash = (timestamp: string): string => {
  return MD5(
    timestamp +
      ConfigProvider.config.api.privateKey +
      ConfigProvider.config.api.publicKey
  ).toString();
};

const buildApiUrl = (
  endpoint: string,
  queryParams?: { [key: string]: string }
): string => {
  const timestamp = getTimestamp();
  const hash = generateHash(timestamp);

  let url = `${ConfigProvider.config.api.baseUrl}/${endpoint}?ts=${timestamp}&apikey=${ConfigProvider.config.api.publicKey}&hash=${hash}`;

  if (queryParams) {
    Object.keys(queryParams).forEach((key) => {
      const value = queryParams[key];
      url += `&${key}=${value}`;
    });
  }

  return url;
};

export default buildApiUrl;
