import { ParsedTodoItem } from "../get-todo/get-todo.types";

export type RenameItemApi = (params: {
  parsedItems: ParsedTodoItem[];
  id: number;
  itemToRenameId: string;
  newName?: string;
}) => Promise<void>;
