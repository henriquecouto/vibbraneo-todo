import { Grid } from "@mui/material";
import { FunctionComponent, useRef, useTransition } from "react";
import { useTodoList } from "../../hooks/use-todo-list";

export const TodoList: FunctionComponent = () => {
  const [_isPending, startTransition] = useTransition();

  const endElementRef = useRef<HTMLDivElement>(null);

  const { batches } = useTodoList({
    limit: 20,
    observerRef: endElementRef,
    onStartLoad: startTransition,
  });

  return (
    <Grid container direction="column" gap={1}>
      {batches}
      <div ref={endElementRef} />
    </Grid>
  );
};
