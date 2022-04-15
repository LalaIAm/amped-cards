import { DeckWhereUniqueInput } from "../deck/DeckWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoundListRelationFilter } from "../round/RoundListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BlackCardWhereInput = {
  deck?: DeckWhereUniqueInput;
  discarded?: BooleanNullableFilter;
  id?: StringFilter;
  rounds?: RoundListRelationFilter;
  text?: StringNullableFilter;
};
