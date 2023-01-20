import { TodoItem } from "../../../../entities/todo";

export type TodoItemsProps = {
  id: number;
};

export type ItemProps = { opened?: boolean } & Partial<TodoItem>;
