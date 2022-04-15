import { DeckWhereUniqueInput } from "../deck/DeckWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { RoundListRelationFilter } from "../round/RoundListRelationFilter";

export type WhiteCardWhereInput = {
  deck?: DeckWhereUniqueInput;
  discoarded?: BooleanNullableFilter;
  id?: StringFilter;
  players?: PlayerWhereUniqueInput;
  rounds?: RoundListRelationFilter;
  selected?: BooleanNullableFilter;
  text?: StringFilter;
};
