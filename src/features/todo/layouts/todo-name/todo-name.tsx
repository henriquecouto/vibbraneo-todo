import { CancelOutlined, Edit, Check } from "@mui/icons-material";
import { IconButton, Grid, Typography, Box } from "@mui/material";
import { ChangeEventHandler, FunctionComponent, useState } from "react";
import { updateNameApi } from "../../adapters/update-name";
import { useTodo } from "../../hooks/use-todo";
import { TodoNameProps } from "./todo-name.types";

import * as S from "./todo-name.styles";

export const TodoName: FunctionComponent<TodoNameProps> = ({ id }) => {
  const [edit, setEdit] = useState(false);
  const {
    data: { name },
    mutate,
  } = useTodo({ id });

  const [changedName, setChangedName] = useState(name);

  const handleEdit = () => setEdit((old) => !old);

  const handleChangeName: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setChangedName(target.value);
  };

  const handleSaveName = async () => {
    await updateNameApi({ name: changedName, id: Number(id) });
    await mutate();
    handleEdit();
  };

  return (
    <Grid container alignItems="center">
      {edit ? (
        <S.TextField
          fullWidth
          value={changedName}
          variant="standard"
          onChange={handleChangeName}
          sx={{
            fontSize: "h5",
          }}
          InputProps={{
            endAdornment: (
              <>
                <IconButton onClick={handleEdit}>
                  <CancelOutlined color="error" />
                </IconButton>
                <IconButton onClick={handleSaveName}>
                  <Check color="success" />
                </IconButton>
              </>
            ),
          }}
        />
      ) : (
        <>
          <Typography variant="h5" component="h1">
            {name}
          </Typography>
          <IconButton onClick={handleEdit}>
            <Edit />
          </IconButton>
        </>
      )}
    </Grid>
  );
};
