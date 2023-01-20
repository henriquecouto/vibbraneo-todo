import { KeyedMutator } from "swr";
import { Todo, TodoItem } from "../../../../entities/todo";

export type GetTodoApiParams = { id: number };

export type ParsedTodoItem = {
  id: TodoItem["id"];
  text: TodoItem["item"];
  children?: ParsedTodoItem[];
};

export type GetTodoApi = (params: GetTodoApiParams) => {
  data: {
    items: ParsedTodoItem[];
  } & Omit<Todo, "itens">;
  mutate: KeyedMutator<any>;
};
