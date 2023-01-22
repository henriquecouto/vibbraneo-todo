import { TodoItem } from "../../../entities/todo";
import { ParsedTodoItem } from "../adapters/get-todo/get-todo.types";

export const unparseItems = (
  parsedItem: ParsedTodoItem,
  index: number
): TodoItem => ({
  id: parsedItem.id,
  order: index,
  item: parsedItem.text,
  itens: parsedItem.children?.map(unparseItems),
});
