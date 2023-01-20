import { ParsedTodoItem } from "../get-todo/get-todo.types";

export type UpdateItemsApi = (params: {
  parsedItems: ParsedTodoItem[];
  id: number;
}) => Promise<void>;
