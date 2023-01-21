import { ReactNode } from "react";
import { ParsedTodoItem } from "../../adapters/get-todo/get-todo.types";

export type ItemProps = {
  item: ParsedTodoItem;
  collapseIcon: ReactNode;
  handler: ReactNode;
  onDelete: (itemId: number) => void;
  onRename: (itemId: number, name: string | undefined) => void;
};
