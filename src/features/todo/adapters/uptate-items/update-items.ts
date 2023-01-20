import { TodoItem } from "../../../../entities/todo";
import { api } from "../../../../services/api";
import { ParsedTodoItem } from "../get-todo/get-todo.types";
import { UpdateItemsApi } from "./update-items.types";

const unparseItems = (parsedItem: ParsedTodoItem, index: number): TodoItem => ({
  id: parsedItem.id,
  order: index,
  item: parsedItem.text,
  itens: parsedItem.children?.map(unparseItems),
});

export const updateItemsApi: UpdateItemsApi = async ({ id, parsedItems }) => {
  const itens = parsedItems.map(unparseItems);
  await api.patch(`/todo/${id}`, { itens });
};
