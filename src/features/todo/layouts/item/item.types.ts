import { ReactNode } from "react";
import { ParsedTodoItem } from "../../adapters/get-todo/get-todo.types";

export type ItemProps = {
  item: ParsedTodoItem;
  collapseIcon: ReactNode;
  handler: ReactNode;
  onDelete: (itemId: string) => void;
  onRename: (itemId: string, name: string | undefined) => void;
};
