import { ParsedTodoItem } from "../todo/adapters/get-todo/get-todo.types";

export const filterItems = (
  item: ParsedTodoItem,
  itemToRemoveId: string
): ParsedTodoItem | undefined => {
  if (item.id === itemToRemoveId) {
    return;
  }

  if (!item.children) {
    return { ...item, children: [] };
  }

  return {
    ...item,
    children: item.children
      .map((item) => filterItems(item, itemToRemoveId) as ParsedTodoItem)
      .filter((item) => item),
  };
};
