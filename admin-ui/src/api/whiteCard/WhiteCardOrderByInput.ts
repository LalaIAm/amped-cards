import { SortOrder } from "../../util/SortOrder";

export type WhiteCardOrderByInput = {
  createdAt?: SortOrder;
  deckId?: SortOrder;
  discoarded?: SortOrder;
  id?: SortOrder;
  playersId?: SortOrder;
  selected?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
