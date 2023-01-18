export type UpdateNameApi = (params: {
  name: string;
  id: number;
}) => Promise<void>;
