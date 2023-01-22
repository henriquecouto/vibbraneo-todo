import { FunctionComponent, useEffect } from "react";
import { updateNameApi } from "../../adapters/update-name";
import { useTodo } from "../../hooks/use-todo";
import { TodoNameProps } from "./todo-name.types";

import { NameInput } from "../../components/name-input";
import { Grid } from "@mui/material";
import { ShareButton } from "../../../listing/layouts/share-button";
import { createTodoApi } from "../../adapters/create-todo";

export const TodoName: FunctionComponent<TodoNameProps> = ({
  permalink,
  name,
}) => {
  const { data, mutate } = useTodo({ permalink });

  const todoLink = `${window.location.origin}${permalink}`;

  const handleSaveName = async (changedName: string) => {
    await updateNameApi({ name: changedName, id: data.id });
    mutate();
  };

  const handleCreateTodo = async () => {
    await createTodoApi({ name, permalink });
    mutate();
  };

  useEffect(() => {
    if (!data.id) {
      handleCreateTodo();
    }
  }, []);

  return (
    <Grid container sx={{ mb: 3 }}>
      <Grid item xs>
        <NameInput
          name={data.name || name}
          onChange={handleSaveName}
          fontSize="h5"
        />
      </Grid>
      <Grid item>
        <ShareButton value={todoLink} />
      </Grid>
    </Grid>
  );
};
