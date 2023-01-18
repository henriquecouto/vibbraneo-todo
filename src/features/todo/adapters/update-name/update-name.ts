import { api } from "../../../../services/api";
import { UpdateNameApi } from "./update-name.types";

export const updateNameApi: UpdateNameApi = async ({ id, name }) => {
  await api.patch(`/todo/${id}`, { name });
};
