import { Todo } from "../../../../entities/todo";
import { useApi } from "../../../../hooks/use-api";
import { parseItems } from "../../../utils/parse-items";
import { sortItems } from "../../../utils/sort-items";
import { GetTodoApi } from "./get-todo.types";

export const getTodoApi: GetTodoApi = ({ id }) => {
  const { data, mutate } = useApi({ path: `/todo/${id}` });

  const sortedItemsData = (data as Todo).itens.sort(sortItems);

  const parsedItemsData = sortedItemsData.map(parseItems);

  return { data: { ...data, items: parsedItemsData }, mutate };
};
