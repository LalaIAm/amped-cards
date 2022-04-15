import { SortOrder } from "../../util/SortOrder";

export type DeckOrderByInput = {
  createdAt?: SortOrder;
  gameId?: SortOrder;
  id?: SortOrder;
  identifier?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
