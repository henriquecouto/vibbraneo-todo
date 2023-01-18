import { FunctionComponent, RefObject, TransitionStartFunction } from "react";

export type UseInfiniteScrollProps<T> = {
  page: number;
  onLoadAction: (params: { page: number }) => {
    data: T[];
  };
  observerRef: RefObject<HTMLElement>;
  onStartLoad: TransitionStartFunction;
  Component: FunctionComponent<{ data: T }>;
};
