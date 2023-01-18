import { Todo } from "../../../../entities/todo";

export type GetTodoListApiParams = {
  page: number;
  limit: number;
};

export type GetTodoListApi = (params: GetTodoListApiParams) => { data: Todo[] };
