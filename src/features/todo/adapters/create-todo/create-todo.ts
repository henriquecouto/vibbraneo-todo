import { api } from "../../../../services/api";
import { CreateTodoApi } from "./create-todo.types";

export const createTodoApi: CreateTodoApi = async ({ name, permalink }) => {
  await api.post("/todo", { name, permalink });
};
