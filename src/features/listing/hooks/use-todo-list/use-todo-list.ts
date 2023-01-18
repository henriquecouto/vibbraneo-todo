import { Todo } from "../../../../entities/todo";
import {
  useInfiniteScroll,
  UseInfiniteScrollProps,
} from "../../../../hooks/use-infinite-scroll";
import { getTodoListApi } from "../../adapters/get-todo-list";
import { TodoItem } from "../../layouts/todo-item";
import { UseTodoListProps } from "./use-todo-list.types";

export const useTodoList = ({
  limit,
  observerRef,
  onStartLoad,
}: UseTodoListProps) => {
  const onLoadAction: UseInfiniteScrollProps<Todo>["onLoadAction"] = ({
    page,
  }) => {
    return getTodoListApi({
      page,
      limit,
    });
  };

  const { batches } = useInfiniteScroll<Todo>({
    observerRef,
    onLoadAction,
    onStartLoad,
    Component: TodoItem,
    page: 1,
  });

  return { batches };
};
