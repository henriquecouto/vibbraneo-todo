import { ParsedTodoItem } from "../get-todo/get-todo.types";

export type RemoveItemApi = (params: {
  parsedItems: ParsedTodoItem[];
  id: number;
  itemToRemoveId: string;
}) => Promise<void>;
