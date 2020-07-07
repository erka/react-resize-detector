import debounce from "lodash.debounce";
import throttle from "lodash.throttle";

export const listHandle = {
  debounce,
  throttle
};

export const getHandle = type => listHandle[type];

export const isFunction = fn => typeof fn === 'function';

export const isSSR = () => typeof window === 'undefined';

export const isDOMElement = element => element instanceof Element || element instanceof HTMLDocument;
