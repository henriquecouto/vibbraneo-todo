import { Add } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { FunctionComponent } from "react";
import { createItemApi } from "../../adapters/create-item/create-item";
import { NameInput } from "../../components/name-input";
import { useTodo } from "../../hooks/use-todo";
import { AddItemsProps } from "./add-item.types";

export const AddItem: FunctionComponent<AddItemsProps> = ({ permalink }) => {
  const { data, mutate } = useTodo({ permalink });

  const handleCreateItem = async (name: string) => {
    await createItemApi({ parentId: data.id, currentItems: data.items, name });
    mutate();
  };

  return (
    <Grid container sx={{ mt: 3 }}>
      {!!data.id && (
        <NameInput
          onChange={handleCreateItem}
          name=""
          placeholder="Add a new item"
          icon={<Add />}
        />
      )}
    </Grid>
  );
};
