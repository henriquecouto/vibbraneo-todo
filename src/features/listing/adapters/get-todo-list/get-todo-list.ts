import { useApi } from "../../../../hooks/use-api";
import { GetTodoListApi } from "./get-todo-list.types";

export const getTodoListApi: GetTodoListApi = ({ page, limit }) => {
  const searchParams = new URLSearchParams();
  searchParams.append("_page", `${page}`);
  searchParams.append("_limit", `${limit}`);

  const { data } = useApi({ path: `/todo?${searchParams.toString()}` });

  return { data };
};
