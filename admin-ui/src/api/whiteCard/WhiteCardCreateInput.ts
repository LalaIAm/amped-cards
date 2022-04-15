import { DeckWhereUniqueInput } from "../deck/DeckWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { RoundCreateNestedManyWithoutWhiteCardsInput } from "./RoundCreateNestedManyWithoutWhiteCardsInput";

export type WhiteCardCreateInput = {
  deck?: DeckWhereUniqueInput | null;
  discoarded?: boolean | null;
  players?: PlayerWhereUniqueInput | null;
  rounds?: RoundCreateNestedManyWithoutWhiteCardsInput;
  selected?: boolean | null;
  text: string;
};
