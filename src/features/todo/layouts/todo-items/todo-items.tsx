import { Paper, Grid, Typography, IconButton } from "@mui/material";
import { FunctionComponent } from "react";
import { useTodo } from "../../hooks/use-todo";
import { ItemProps, TodoItemsProps } from "./todo-items.types";
import Nestable from "react-nestable";
import "react-nestable/dist/styles/index.css";
import {
  DeleteForever,
  DragIndicator,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import { updateItemsApi } from "../../adapters/uptate-items";
import { ParsedTodoItem } from "../../adapters/get-todo/get-todo.types";
import { removeItemApi } from "../../adapters/remove-item";

const Item: FunctionComponent<ItemProps> = ({
  item,
  collapseIcon,
  handler,
  onDelete,
}) => {
  return (
    <Grid container alignItems="center">
      <Grid item sx={{ cursor: "move" }}>
        {handler}
      </Grid>
      <Grid item xs>
        <Paper sx={{ padding: 2 }}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography>{item.text}</Typography>
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

export const TodoItems: FunctionComponent<TodoItemsProps> = ({ id }) => {
  const { data, mutate } = useTodo({ id });

  const handleOnDeleteItem = async (itemId: number) => {
    await removeItemApi({
      id,
      itemToRemoveId: itemId,
      parsedItems: data.items,
    });
    mutate();
  };

  return (
    <Grid container gap={2} direction="column">
      <Nestable
        onChange={({ items }) => {
          updateItemsApi({ parsedItems: items as ParsedTodoItem[], id });
        }}
        renderItem={({ collapseIcon, item, handler }) => (
          <Item
            item={item as ParsedTodoItem}
            collapseIcon={collapseIcon}
            handler={handler}
            onDelete={handleOnDeleteItem}
          />
        )}
        items={data.items}
        handler={<DragIndicator />}
        renderCollapseIcon={({ isCollapsed }) => (
          <IconButton>
            {isCollapsed ? <ExpandMore /> : <ExpandLess />}
          </IconButton>
        )}
      />
    </Grid>
  );
};
