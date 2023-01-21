import { DeleteForever } from "@mui/icons-material";
import { Grid, IconButton, Paper } from "@mui/material";
import { FunctionComponent } from "react";
import { NameInput } from "../../components/name-input";
import { ItemProps } from "./item.types";

export const Item: FunctionComponent<ItemProps> = ({
  item,
  collapseIcon,
  handler,
  onDelete,
  onRename,
}) => {
  const handleSaveName = (changedName: string) => {
    onRename(item.id, changedName);
  };

  return (
    <Grid container alignItems="center">
      <Grid item sx={{ cursor: "move" }}>
        {handler}
      </Grid>
      <Grid item xs>
        <Paper sx={{ padding: 2 }}>
          <Grid container alignItems="center">
            <Grid item xs>
              <NameInput name={item.text} onChange={handleSaveName} />
            </Grid>
            <Grid item>
              <IconButton onClick={() => onDelete(item.id)}>
                <DeleteForever />
              </IconButton>
            </Grid>
            <Grid item>{collapseIcon}</Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
