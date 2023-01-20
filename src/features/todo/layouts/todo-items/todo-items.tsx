import { Paper, Grid, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { useTodo } from "../../hooks/use-todo";
import { ItemProps, TodoItemsProps } from "./todo-items.types";
import Nestable from "react-nestable";
import "react-nestable/dist/styles/index.css";
import { DragIndicator, ExpandLess, ExpandMore } from "@mui/icons-material";
import { updateItemsApi } from "../../adapters/uptate-items";
import { ParsedTodoItem } from "../../adapters/get-todo/get-todo.types";

const renderItem = ({ item, collapseIcon, handler }: any) => (
  <Item {...item} collapsible={collapseIcon} handler={handler} />
);

const Item: FunctionComponent<ItemProps> = ({ text, collapsible, handler }) => {
  return (
    <Grid container alignItems="center">
      <Grid item sx={{ cursor: "move" }}>
        {handler}
      </Grid>
      <Grid item xs>
        <Paper sx={{ padding: 2 }}>
          <Grid container>
            <Grid item xs>
              <Typography>{text}</Typography>
            </Grid>
            <Grid item sx={{ cursor: "pointer" }}>
              {collapsible}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export const TodoItems: FunctionComponent<TodoItemsProps> = ({ id }) => {
  const { data } = useTodo({ id });

  return (
    <Grid container gap={2} direction="column">
      <Nestable
        onChange={({ items }) => {
          updateItemsApi({ parsedItems: items as ParsedTodoItem[], id });
        }}
        renderItem={renderItem}
        items={data.items}
        handler={<DragIndicator />}
        renderCollapseIcon={({ isCollapsed }) =>
          isCollapsed ? <ExpandMore /> : <ExpandLess />
        }
      />
    </Grid>
  );
};
