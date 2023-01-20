import { Todo, TodoItem } from "../../../../entities/todo";
import { useApi } from "../../../../hooks/use-api";
import { GetTodoApi, ParsedTodoItem } from "./get-todo.types";

const sortItems = (itemA: TodoItem, itemB: TodoItem) => {
  if (itemA.itens) {
    itemA.itens.sort(sortItems);
  }

  if (itemA.order < itemB.order) return -1;
  if (itemA.order > itemB.order) return 1;

  return 0;
};

const parseItems = (item: TodoItem): ParsedTodoItem => ({
  id: item.id,
  children: item.itens?.map(parseItems),
  text: item.item,
});

export const getTodoApi: GetTodoApi = ({ id }) => {
  const { data, mutate } = useApi({ path: `/todo/${id}` });

  const sortedItemsData = (data as Todo).itens.sort(sortItems);

  const parsedItemsData = sortedItemsData.map(parseItems);

  return { data: { ...data, items: parsedItemsData }, mutate };
};
