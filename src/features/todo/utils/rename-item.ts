import { ParsedTodoItem } from "../adapters/get-todo/get-todo.types";

export const renameItem = (
  item: ParsedTodoItem,
  itemToRenameId: string,
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
