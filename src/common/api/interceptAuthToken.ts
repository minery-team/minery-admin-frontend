import { getAccessToken } from '@/utils/access-token';
import { AxiosHeaders, InternalAxiosRequestConfig } from 'axios';

export async function interceptAuthToken(
  config: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> {
  const accessToken = getAccessToken();
  return {
    ...config,
    headers: new AxiosHeaders({
      ...config.headers.toJSON(),
      Authorization: `Bearer ${accessToken}`,
    }),
  };
}
