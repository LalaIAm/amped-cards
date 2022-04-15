import { SortOrder } from "../../util/SortOrder";

export type GameOrderByInput = {
  createdAt?: SortOrder;
  currentRound?: SortOrder;
  id?: SortOrder;
  totalRounds?: SortOrder;
  updatedAt?: SortOrder;
};
