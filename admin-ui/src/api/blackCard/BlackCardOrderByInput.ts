import { SortOrder } from "../../util/SortOrder";

export type BlackCardOrderByInput = {
  createdAt?: SortOrder;
  deckId?: SortOrder;
  discarded?: SortOrder;
  id?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
