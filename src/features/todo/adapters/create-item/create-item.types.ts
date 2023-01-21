import { ParsedTodoItem } from "../get-todo/get-todo.types";

export type CreateItemApi = (params: {
  parentId: number;
  currentItems: ParsedTodoItem[];
  name?: string;
}) => Promise<void>;
