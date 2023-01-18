import { getTodoApi } from "../../adapters/get-todo";
import { GetTodoApiParams } from "../../adapters/get-todo/get-todo.types";

export const useTodo = ({ id }: GetTodoApiParams) => {
  const { data, mutate } = getTodoApi({ id });
  return { data, mutate };
};
