// Check if we're on the client side before accessing localStorage
const isClient = typeof window !== 'undefined';

export const AUTH_KEY = 'auth_session';

export function saveAuthSession(password:string) {
  if (isClient) {
    localStorage.setItem(AUTH_KEY, password);
  }
}

export function clearAuthSession() {
  if (isClient) {
    localStorage.removeItem(AUTH_KEY);
  }
}

export function checkAuthSession(): boolean {
  if (isClient) {
    return localStorage.getItem(AUTH_KEY) === process.env.NEXT_PUBLIC_ACCESS_PASSWORD;
  }
  return false;
}
