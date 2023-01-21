import { ParsedTodoItem } from "../get-todo/get-todo.types";

export type RenameItemApi = (params: {
  parsedItems: ParsedTodoItem[];
  id: number;
  itemToRenameId: number;
  newName?: string;
}) => Promise<void>;
