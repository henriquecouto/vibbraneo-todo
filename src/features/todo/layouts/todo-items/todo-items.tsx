import { Grid, IconButton } from "@mui/material";
import { FunctionComponent } from "react";
import { useTodo } from "../../hooks/use-todo";
import {
  HandleChangeProps,
  RenderCollapseIconProps,
  RenderItemProps,
  TodoItemsProps,
} from "./todo-items.types";
import Nestable from "react-nestable";
import "react-nestable/dist/styles/index.css";
import { DragIndicator, ExpandLess, ExpandMore } from "@mui/icons-material";
import { updateItemsApi } from "../../adapters/uptate-items";
import { ParsedTodoItem } from "../../adapters/get-todo/get-todo.types";
import { removeItemApi } from "../../adapters/remove-item";
import { Item } from "../item/item";
import { renameItemApi } from "../../adapters/rename-item";

export const TodoItems: FunctionComponent<TodoItemsProps> = ({ permalink }) => {
  const { data, mutate } = useTodo({ permalink });

  const handleOnDeleteItem = async (itemId: string) => {
    await removeItemApi({
      id: data.id,
      itemToRemoveId: itemId,
      parsedItems: data.items,
    });
    mutate();
  };

  const handleOnRenameItem = async (itemId: string, name?: string) => {
    await renameItemApi({
      id: data.id,
      itemToRenameId: itemId,
      newName: name,
      parsedItems: data.items,
    });
    mutate();
  };

  const renderItem = ({ collapseIcon, item, handler }: RenderItemProps) => (
    <Item
      item={item as ParsedTodoItem}
      collapseIcon={collapseIcon}
      handler={handler}
      onDelete={handleOnDeleteItem}
      onRename={handleOnRenameItem}
    />
  );

  const handleOnChange = ({ items }: HandleChangeProps) => {
    updateItemsApi({ parsedItems: items as ParsedTodoItem[], id: data.id });
  };

  const renderCollapseIcon = ({ isCollapsed }: RenderCollapseIconProps) => (
    <IconButton>{isCollapsed ? <ExpandMore /> : <ExpandLess />}</IconButton>
  );

  return (
    <Grid container gap={2} direction="column">
      <Nestable
        onChange={handleOnChange}
        renderItem={renderItem}
        items={data.items}
        handler={<DragIndicator />}
        renderCollapseIcon={renderCollapseIcon}
      />
    </Grid>
  );
};
