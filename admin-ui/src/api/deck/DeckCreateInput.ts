import { BlackCardCreateNestedManyWithoutDecksInput } from "./BlackCardCreateNestedManyWithoutDecksInput";
import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { WhiteCardCreateNestedManyWithoutDecksInput } from "./WhiteCardCreateNestedManyWithoutDecksInput";

export type DeckCreateInput = {
  blackCards?: BlackCardCreateNestedManyWithoutDecksInput;
  game?: GameWhereUniqueInput | null;
  identifier: string;
  title?: string | null;
  whiteCards?: WhiteCardCreateNestedManyWithoutDecksInput;
};
