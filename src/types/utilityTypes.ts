type OrNull<T> = T | null;

type OrUndefined<T> = T | undefined;

type WebViewVariant = 'Screen' | 'Search' | 'Processing';

type AnyCallback = (...args: any[]) => any;

type VoidCallbackWithArgs = (...args: any[]) => void | Promise<void>;

type VoidCallback = () => void | Promise<void>;

type AnyReturnCallback = () => any | void | Promise<void>;

type UnionOfObjPropTypes<T> = T[keyof T];

export type {
  AnyCallback,
  AnyReturnCallback,
  OrNull,
  OrUndefined,
  UnionOfObjPropTypes,
  VoidCallback,
  VoidCallbackWithArgs,
  WebViewVariant,
};
