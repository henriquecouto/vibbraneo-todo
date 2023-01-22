import { Grid, Paper, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { DeleteTodo } from "../../../todo";
import { deleteTodoApi } from "../../adapters/delete-todo";
import { ShareButton } from "../share-button";
import { TodoListProps } from "./todo-list.types";

export const TodoItem: FunctionComponent<TodoListProps> = ({
  data,
  mutate,
}) => {
  const { name, permalink, itens, id } = data;

  const todoLink = `${window.location.origin}${data.permalink}`;

  const handleDelete = async () => {
    await deleteTodoApi({ id });
    mutate();
  };

  return (
    <Paper sx={{ padding: 1, minWidth: 200 }} component="article">
      <Link to={permalink}>
        <Typography
          noWrap
          variant="body1"
          fontWeight="bold"
          component="h2"
          color="HighlightText"
          title={name}
        >
          {name}
        </Typography>
      </Link>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item xs>
          <Typography variant="caption">{itens?.length || 0} items</Typography>
        </Grid>
        <Grid item>
          <DeleteTodo onConfirm={handleDelete} name={name} />
        </Grid>
        <Grid item>
          <ShareButton value={todoLink} />
        </Grid>
      </Grid>
    </Paper>
  );
};
