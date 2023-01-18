import { RefObject, TransitionStartFunction } from "react";
import { GetTodoListApiParams } from "../../adapters/get-todo-list/get-todo-list.types";

export type UseTodoListProps = {
  observerRef: RefObject<HTMLElement>;
  onStartLoad: TransitionStartFunction;
} & Omit<GetTodoListApiParams, "page">;
