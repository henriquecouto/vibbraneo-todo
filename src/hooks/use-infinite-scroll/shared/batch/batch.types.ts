import { UseInfiniteScrollProps } from "../../use-infinite-scroll.types";

export type BatchProps<T> = Pick<
  UseInfiniteScrollProps<T>,
  "Component" | "onLoadAction" | "page"
> & {
  onLoadAll: () => void;
  page: number;
};
