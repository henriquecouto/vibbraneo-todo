import { FunctionComponent, RefObject, TransitionStartFunction } from "react";
import { KeyedMutator } from "swr";

export type UseInfiniteScrollProps<T> = {
  page: number;
  onLoadAction: (params: { page: number }) => {
    data: T[];
    mutate: KeyedMutator<any>;
  };
  observerRef: RefObject<HTMLElement>;
  onStartLoad: TransitionStartFunction;
  Component: FunctionComponent<{ data: T; mutate: KeyedMutator<any> }>;
};
