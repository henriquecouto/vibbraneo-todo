import { TodoItem } from "../../../entities/todo";

export const sortItems = (itemA: TodoItem, itemB: TodoItem) => {
  if (itemA.itens) {
    itemA.itens.sort(sortItems);
  }

  if (itemA.order < itemB.order) return -1;
  if (itemA.order > itemB.order) return 1;

  return 0;
};
