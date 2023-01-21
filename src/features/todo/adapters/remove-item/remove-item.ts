import { api } from "../../../../services/api";
import { filterItems } from "../../../utils/filter-items";
import { unparseItems } from "../../../utils/unparse-items";
import { RemoveItemApi } from "./remove-item.types";

export const removeItemApi: RemoveItemApi = async ({
  id,
  parsedItems,
  itemToRemoveId,
}) => {
  const itens = parsedItems
    .map((item) => filterItems(item, itemToRemoveId))
    .filter((item) => item)
    .map((item, index) => unparseItems(item!, index));

  await api.patch(`/todo/${id}`, { itens });
};
