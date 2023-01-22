import { KeyedMutator } from "swr";
import { Todo } from "../../../../entities/todo";

export type TodoListProps = {
  data: Todo;
  mutate: KeyedMutator<any>;
};
