import { safeSessionStorage } from './Storage';

export const ACCESS_TOKEN_KEY = '@YWNjZXNzX3Rva2Vu';

export function getAccessToken() {
  return safeSessionStorage.get(ACCESS_TOKEN_KEY);
}

export function clearAccessToken() {
  return safeSessionStorage.remove(ACCESS_TOKEN_KEY);
}

export function setAccessToken(accessToken: string) {
  return safeSessionStorage.set(ACCESS_TOKEN_KEY, accessToken);
}
