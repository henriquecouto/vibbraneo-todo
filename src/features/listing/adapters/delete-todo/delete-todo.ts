import { api } from "../../../../services/api";
import { DeleteTodoApi } from "./delete-todo.types";

export const deleteTodoApi: DeleteTodoApi = async ({ id }) => {
  return await api.delete(`/todo/${id}`);
};
