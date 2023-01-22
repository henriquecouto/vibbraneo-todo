export type DeleteTodoApiParams = {
  id: number;
};

export type DeleteTodoApi = (params: DeleteTodoApiParams) => Promise<void>;
