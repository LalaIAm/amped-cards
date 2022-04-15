import { DeckWhereUniqueInput } from "./DeckWhereUniqueInput";
import { DeckUpdateInput } from "./DeckUpdateInput";

export type UpdateDeckArgs = {
  where: DeckWhereUniqueInput;
  data: DeckUpdateInput;
};
