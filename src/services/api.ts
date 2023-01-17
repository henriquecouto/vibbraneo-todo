import axios from "axios";
import { cookieManager } from "../utils/cookie-manager";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  const authToken = cookieManager.get({ cookieName: "authToken" });
  const isAuthRoute = config.url === "/auth";

  if (!authToken && !isAuthRoute) {
    throw new axios.Cancel("user not logged");
  }

  config.headers = {
    authorization: authToken,
  };
  return config;
});
