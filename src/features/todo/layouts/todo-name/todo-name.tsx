import { FunctionComponent } from "react";
import { updateNameApi } from "../../adapters/update-name";
import { useTodo } from "../../hooks/use-todo";
import { TodoNameProps } from "./todo-name.types";

import { NameInput } from "../../components/name-input";
import { Divider } from "@mui/material";

export const TodoName: FunctionComponent<TodoNameProps> = ({ id }) => {
  const {
    data: { name },
    mutate,
  } = useTodo({ id });

  const handleSaveName = async (changedName: string) => {
    await updateNameApi({ name: changedName, id: Number(id) });
    mutate();
  };

  return (
    <>
      <NameInput name={name} onChange={handleSaveName} fontSize="h5" />

      <Divider sx={{ mt: 1, mb: 3 }} />
    </>
  );
};
