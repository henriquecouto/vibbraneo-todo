import { TodoItem } from "../../entities/todo";
import { ParsedTodoItem } from "../todo/adapters/get-todo/get-todo.types";

export const parseItems = (item: TodoItem): ParsedTodoItem => ({
  id: item.id,
  children: item.itens?.map(parseItems),
  text: item.item,
});
