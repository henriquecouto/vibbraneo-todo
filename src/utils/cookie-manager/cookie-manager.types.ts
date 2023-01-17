type GetCookie = { cookieName: string };
type SetCookie = {
  cookieName: string;
  value: string;
  expirationDate?: Date;
};
type RemoveCookie = { cookieName: string; globally?: boolean };

export type CookieManager = {
  get: (props: GetCookie) => string;
  set: (props: SetCookie) => void;
  remove: (props: RemoveCookie) => void;
};
