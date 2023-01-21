import { api } from "../../../../services/api";
import { renameItem } from "../../../utils/rename-item";
import { unparseItems } from "../../../utils/unparse-items";
import { RenameItemApi } from "./rename-item.types";

export const renameItemApi: RenameItemApi = async ({
  id,
  parsedItems,
  itemToRenameId,
  newName = "",
}) => {
  const itens = parsedItems
    .map((item) => renameItem(item, itemToRenameId, newName))
    .map(unparseItems);

  await api.patch(`/todo/${id}`, { itens });
};
