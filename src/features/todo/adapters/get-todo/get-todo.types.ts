import { KeyedMutator } from "swr";
import { Todo, TodoItem } from "../../../../entities/todo";

export type GetTodoApiParams = { permalink: string };

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
