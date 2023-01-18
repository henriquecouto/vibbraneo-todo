import { KeyedMutator } from "swr";
import { Todo } from "../../../../entities/todo";

export type GetTodoApiParams = { id: number };

export type GetTodoApi = (params: GetTodoApiParams) => {
  data: Todo;
  mutate: KeyedMutator<any>;
};
