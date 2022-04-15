import { BlackCardUpdateManyWithoutDecksInput } from "./BlackCardUpdateManyWithoutDecksInput";
import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { WhiteCardUpdateManyWithoutDecksInput } from "./WhiteCardUpdateManyWithoutDecksInput";

export type DeckUpdateInput = {
  blackCards?: BlackCardUpdateManyWithoutDecksInput;
  game?: GameWhereUniqueInput | null;
  identifier?: string;
  title?: string | null;
  whiteCards?: WhiteCardUpdateManyWithoutDecksInput;
};
