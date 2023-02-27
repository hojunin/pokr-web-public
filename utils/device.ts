import { androidRegExp, iosRegExp } from './regExp';

declare global {
  interface Window {
    ReactNativeWebView: any;
  }
}

/**
 * 전역객체가 존재하는지 확인하여 Client Side인지 확인합니다.
 */
const isClientSide = () => {
  return typeof window === 'undefined';
};

/**
 * userAgent로 SSR 환경인지 파악합니다.
 * @returns
 */
const isSSR = () =>
  isClientSide() ||
  !window.navigator ||
  /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);

/**
 * Android인지 확인합니다.
 */
const isAndroid = () => {
  if (!isClientSide()) {
    return false;
  }
  const userAgent = window.navigator.userAgent.toLowerCase();
  return userAgent.match(androidRegExp) !== null;
};

/**
 * Ios인지 확인합니다.
 */
const isIos = () => {
  if (!isClientSide()) {
    return false;
  }
  const userAgent = window.navigator.userAgent.toLowerCase();
  return userAgent.match(iosRegExp) !== null;
};

/**
 * React Native Webview로부터 호출되었는지 확인합니다.
 */
const isRN = () => {
  if (!isClientSide()) {
    return false;
  }

  return typeof window.ReactNativeWebView === 'function';
};

export { isClientSide, isSSR, isAndroid, isIos, isRN };
