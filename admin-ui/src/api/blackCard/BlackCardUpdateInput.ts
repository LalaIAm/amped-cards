import { DeckWhereUniqueInput } from "../deck/DeckWhereUniqueInput";
import { RoundUpdateManyWithoutBlackCardsInput } from "./RoundUpdateManyWithoutBlackCardsInput";

export type BlackCardUpdateInput = {
  deck?: DeckWhereUniqueInput | null;
  discarded?: boolean | null;
  rounds?: RoundUpdateManyWithoutBlackCardsInput;
  text?: string | null;
};
