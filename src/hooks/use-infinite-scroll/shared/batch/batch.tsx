import { useEffect } from "react";
import { BatchProps } from "./batch.types";

export const Batch = <T extends unknown>({
  onLoadAction,
  Component,
  onLoadAll,
  page,
}: BatchProps<T>) => {
  const { data } = onLoadAction({ page });

  useEffect(() => {
    if (!data.length) {
      onLoadAll();
    }
  }, []);

  return (
    <>
      {data.map((item: any, index) => (
        <Component key={item.id || index} data={item} />
      ))}
    </>
  );
};
