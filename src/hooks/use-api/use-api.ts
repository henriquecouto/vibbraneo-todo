import useSWR from "swr";
import { useCallback } from "react";
import { UseApiProps } from "./use-api.types";
import { api } from "../../services/api";

export const useApi = ({ path }: UseApiProps) => {
  const fetcher = useCallback(
    (url: string) => api.get(url).then((res) => res.data),
    []
  );

  const { data } = useSWR(path, fetcher, {
    suspense: true,
  });

  return { data };
};
