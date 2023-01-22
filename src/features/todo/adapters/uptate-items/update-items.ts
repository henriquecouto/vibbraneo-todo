import { api } from "../../../../services/api";
import { unparseItems } from "../../utils/unparse-items";
import { UpdateItemsApi } from "./update-items.types";

export const updateItemsApi: UpdateItemsApi = async ({ id, parsedItems }) => {
  const itens = parsedItems.map(unparseItems);
  await api.patch(`/todo/${id}`, { itens });
};
