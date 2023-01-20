export type TodoItem = {
  id: number;
  order: number;
  item?: string;
  itens?: TodoItem[];
};

export type Todo = {
  id: number;
  name: string;
  permalink: string;
  itens: TodoItem[];
};
