import { DeckWhereInput } from "./DeckWhereInput";
import { DeckOrderByInput } from "./DeckOrderByInput";

export type DeckFindManyArgs = {
  where?: DeckWhereInput;
  orderBy?: Array<DeckOrderByInput>;
  skip?: number;
  take?: number;
};
