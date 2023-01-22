import { Grid, Paper, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { ShareButton } from "../share-button";
import { TodoListProps } from "./todo-list.types";

export const TodoItem: FunctionComponent<TodoListProps> = ({ data }) => {
  const { name, permalink, itens } = data;

  const todoLink = `${window.location.origin}${data.permalink}`;

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
        <Grid item>
          <Typography variant="caption">{itens?.length || 0} items</Typography>
        </Grid>
        <Grid item>
          <ShareButton value={todoLink} />
        </Grid>
      </Grid>
    </Paper>
  );
};
