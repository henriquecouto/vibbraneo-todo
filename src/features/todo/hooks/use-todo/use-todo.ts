import { getTodoApi } from "../../adapters/get-todo";
import { GetTodoApiParams } from "../../adapters/get-todo/get-todo.types";

export const useTodo = ({ permalink }: GetTodoApiParams) => {
  const { data, mutate } = getTodoApi({ permalink });
  return { data, mutate };
};
