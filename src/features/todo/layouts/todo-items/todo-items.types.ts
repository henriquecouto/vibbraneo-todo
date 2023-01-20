import { ReactNode } from "react";
import { ParsedTodoItem } from "../../adapters/get-todo/get-todo.types";

export type TodoItemsProps = {
  id: number;
};

export type ItemProps = { collapsible: boolean; handler: any } & ParsedTodoItem;
