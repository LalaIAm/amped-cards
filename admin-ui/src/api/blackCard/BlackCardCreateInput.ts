import { DeckWhereUniqueInput } from "../deck/DeckWhereUniqueInput";
import { RoundCreateNestedManyWithoutBlackCardsInput } from "./RoundCreateNestedManyWithoutBlackCardsInput";

export type BlackCardCreateInput = {
  deck?: DeckWhereUniqueInput | null;
  discarded?: boolean | null;
  rounds?: RoundCreateNestedManyWithoutBlackCardsInput;
  text?: string | null;
};
