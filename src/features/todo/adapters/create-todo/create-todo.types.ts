export type CreateTodoApiParams = { name: string; permalink: string };

export type CreateTodoApi = (params: CreateTodoApiParams) => Promise<void>;
