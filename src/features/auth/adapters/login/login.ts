import { api } from "../../../../services/api";
import { LoginAdapter, LoginAdapterResponse } from "./login.types";

export const loginAdapter: LoginAdapter = async (params, callback) => {
  const { data } = await api.post<LoginAdapterResponse>("/auth", params);
  callback(data);
};
