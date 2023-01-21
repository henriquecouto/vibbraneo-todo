import {
  CancelOutlined,
  Check,
  DeleteForever,
  Edit,
} from "@mui/icons-material";
import { Grid, IconButton, Paper, TextField, Typography } from "@mui/material";
import { ChangeEventHandler, FunctionComponent, useState } from "react";
import { ItemProps } from "./item.types";

export const Item: FunctionComponent<ItemProps> = ({
  item,
  collapseIcon,
  handler,
  onDelete,
  onRename,
}) => {
  const [edit, setEdit] = useState(false);
  const [changedName, setChangedName] = useState(item.text);

  const handleEdit = () => setEdit((old) => !old);

  const handleChangeName: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setChangedName(target.value);
  };

  const handleSaveName = async () => {
    onRename(item.id, changedName);
    handleEdit();
  };

  return (
    <Grid container alignItems="center">
      <Grid item sx={{ cursor: "move" }}>
        {handler}
      </Grid>
      <Grid item xs>
        <Paper sx={{ padding: 2 }}>
          <Grid container alignItems="center">
            {edit ? (
              <Grid item xs>
                <TextField
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
              </Grid>
            ) : (
              <>
                <Grid item xs>
                  <Typography>{item.text}</Typography>
                </Grid>
                <Grid item>
                  <IconButton onClick={handleEdit}>
                    <Edit />
                  </IconButton>
                </Grid>
              </>
            )}
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
