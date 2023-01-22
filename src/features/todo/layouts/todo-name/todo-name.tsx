import { FunctionComponent } from "react";
import { updateNameApi } from "../../adapters/update-name";
import { useTodo } from "../../hooks/use-todo";
import { TodoNameProps } from "./todo-name.types";

import { NameInput } from "../../components/name-input";
import { Grid } from "@mui/material";
import { ShareButton } from "../../../listing/layouts/share-button";

export const TodoName: FunctionComponent<TodoNameProps> = ({ id }) => {
  const {
    data: { name, permalink },
    mutate,
  } = useTodo({ id });

  const todoLink = `${window.location.origin}${permalink}`;

  const handleSaveName = async (changedName: string) => {
    await updateNameApi({ name: changedName, id: Number(id) });
    mutate();
  };

  return (
    <Grid container sx={{ mb: 3 }}>
      <Grid item xs>
        <NameInput name={name} onChange={handleSaveName} fontSize="h5" />
      </Grid>
      <Grid item>
        <ShareButton value={todoLink} />
      </Grid>
    </Grid>
  );
};
