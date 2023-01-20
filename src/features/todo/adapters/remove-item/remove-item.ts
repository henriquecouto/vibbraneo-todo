import { TodoItem } from "../../../../entities/todo";
import { api } from "../../../../services/api";
import { ParsedTodoItem } from "../get-todo/get-todo.types";
import { RemoveItemApi } from "./remove-item.types";

const unparseItems = (parsedItem: ParsedTodoItem, index: number): TodoItem => ({
  id: parsedItem.id,
  order: index,
  item: parsedItem.text,
  itens: parsedItem.children?.map(unparseItems),
});

const filterItems = (
  item: ParsedTodoItem,
  itemToRemoveId: number
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

export const removeItemApi: RemoveItemApi = async ({
  id,
  parsedItems,
  itemToRemoveId,
}) => {
  const itens = parsedItems
    .map((item) => filterItems(item, itemToRemoveId))
    .filter((item) => item)
    .map((item, index) => unparseItems(item!, index));

  await api.patch(`/todo/${id}`, { itens });
};
