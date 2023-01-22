import { Item } from "react-nestable";
import { ItemProps } from "../item/item.types";

export type TodoItemsProps = {
  permalink: string;
};

export type RenderItemProps = { item: Item } & Pick<
  ItemProps,
  "collapseIcon" | "handler"
>;

export type HandleChangeProps = { items: Item[] };

export type RenderCollapseIconProps = { isCollapsed: boolean };
