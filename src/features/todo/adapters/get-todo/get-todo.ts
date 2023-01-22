import { useApi } from "../../../../hooks/use-api";
import { parseItems } from "../../../utils/parse-items";
import { sortItems } from "../../../utils/sort-items";
import { GetTodoApi } from "./get-todo.types";

export const getTodoApi: GetTodoApi = ({ permalink }) => {
  const { data, mutate } = useApi({ path: `/todo?permalink=${permalink}` });

  const sortedItemsData = data[0]?.itens?.sort(sortItems);

  const parsedItemsData = sortedItemsData?.map(parseItems);

  return { data: { ...data[0], items: parsedItemsData }, mutate };
};
