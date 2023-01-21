import { ParsedTodoItem } from "../todo/adapters/get-todo/get-todo.types";

export const renameItem = (
  item: ParsedTodoItem,
  itemToRenameId: number,
  newName: string
): ParsedTodoItem => {
  if (item.id === itemToRenameId) {
    return { ...item, text: newName };
  }

  if (!item.children) {
    return item;
  }

  return {
    ...item,
    children: item.children
      .map((item) => renameItem(item, itemToRenameId, newName))
      .filter((item) => item),
  };
};
