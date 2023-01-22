export type TodoItem = {
  id: string;
  order: number;
  item?: string;
  itens?: TodoItem[];
};

export type Todo = {
  id: number;
  name: string;
  permalink: string;
  itens?: TodoItem[];
};
