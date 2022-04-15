import { DeckWhereUniqueInput } from "../deck/DeckWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { RoundUpdateManyWithoutWhiteCardsInput } from "./RoundUpdateManyWithoutWhiteCardsInput";

export type WhiteCardUpdateInput = {
  deck?: DeckWhereUniqueInput | null;
  discoarded?: boolean | null;
  players?: PlayerWhereUniqueInput | null;
  rounds?: RoundUpdateManyWithoutWhiteCardsInput;
  selected?: boolean | null;
  text?: string;
};
