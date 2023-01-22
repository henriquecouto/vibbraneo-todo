import { api } from "../../../../services/api";
import { CreateItemApi } from "./create-item.types";
import { v4 as uuidv4 } from "uuid";
import { unparseItems } from "../../utils/unparse-items";

export const createItemApi: CreateItemApi = async ({
  parentId,
  name,
  currentItems,
}) => {
  const itemId = uuidv4();

  const unparsedItems = currentItems?.map(unparseItems) || [];

  unparsedItems.push({ id: itemId, item: name, order: -1 });

  await api.patch(`/todo/${parentId}`, { itens: unparsedItems });
};
