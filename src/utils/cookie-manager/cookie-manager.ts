import { CookieManager } from "./cookie-manager.types";

export const cookieManager: CookieManager = {
  get: ({ cookieName }) => {
    const cookies: { [cookieName: string]: string | undefined } =
      document.cookie?.split("; ").reduce((previous, current) => {
        const [name, value] = current.split("=");
        return { ...previous, [name]: value };
      }, {}) || [];

    const value = cookies[cookieName];
    return value ?? "";
  },
  set: ({ cookieName, value, expirationDate }) => {
    let cookie = `${cookieName}=${value};`;

    if (expirationDate) {
      const dateUTCString = expirationDate.toUTCString();
      cookie += ` expires=${dateUTCString};`;
    }

    document.cookie = cookie;
  },
  remove: ({ cookieName }) => {
    const date = new Date();
    date.setFullYear(2000);

    let cookie = `${cookieName}=; expires=${date.toUTCString()};`;

    document.cookie = cookie;
  },
};
