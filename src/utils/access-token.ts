import { safeLocalStorage } from './Storage';

export const ACCESS_TOKEN_KEY = '@YWNjZXNzX3Rva2Vu';

export function getAccessToken() {
  return safeLocalStorage.get(ACCESS_TOKEN_KEY);
}

export function clearAccessToken() {
  return safeLocalStorage.remove(ACCESS_TOKEN_KEY);
}

export function setAccessToken(accessToken: string) {
  return safeLocalStorage.set(ACCESS_TOKEN_KEY, accessToken);
}
