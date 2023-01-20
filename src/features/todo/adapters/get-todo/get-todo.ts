import { Todo, TodoItem } from "../../../../entities/todo";
import { useApi } from "../../../../hooks/use-api";
import { GetTodoApi } from "./get-todo.types";

const sortItems = (itemA: TodoItem, itemB: TodoItem) => {
  if (itemA.itens) {
    itemA.itens.sort(sortItems);
  }

  if (itemA.order < itemB.order) return -1;
  if (itemA.order > itemB.order) return 1;

  return 0;
};

export const getTodoApi: GetTodoApi = ({ id }) => {
  const { data, mutate } = useApi({ path: `/todo/${id}` });

  const parsedItemsData = (data as Todo).itens.sort(sortItems);

  return { data: { ...data, itens: parsedItemsData }, mutate };
};
