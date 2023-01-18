import { useEffect, useState } from "react";
import { Batch } from "./shared/batch";
import { UseInfiniteScrollProps } from "./use-infinite-scroll.types";

export const useInfiniteScroll = <T extends unknown>({
  onLoadAction,
  observerRef,
  onStartLoad,
  Component,
}: UseInfiniteScrollProps<T>) => {
  const [length, setLength] = useState(1);
  const [isLoadedAll, setIsLoadedAll] = useState(false);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      const isIntersecting = entries.some((entry) => entry.isIntersecting);
      if (!isLoadedAll && isIntersecting) {
        onStartLoad(() => {
          setLength((old) => old + 1);
        });
      }
    });

    intersectionObserver.observe(observerRef.current!);

    return () => intersectionObserver.disconnect();
  }, [isLoadedAll]);

  const batches = Array.from(Array(length).keys()).map((index) => (
    <Batch
      key={index}
      onLoadAll={() => setIsLoadedAll(true)}
      onLoadAction={onLoadAction}
      Component={Component}
      page={index + 1}
    />
  ));

  return { batches };
};
