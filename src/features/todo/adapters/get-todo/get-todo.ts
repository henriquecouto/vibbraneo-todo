import { useApi } from "../../../../hooks/use-api";
import { GetTodoApi } from "./get-todo.types";

export const getTodoApi: GetTodoApi = ({ id }) => {
  const { data, mutate } = useApi({ path: `/todo/${id}` });

  return { data, mutate };
};
