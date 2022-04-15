import { BlackCardListRelationFilter } from "../blackCard/BlackCardListRelationFilter";
import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WhiteCardListRelationFilter } from "../whiteCard/WhiteCardListRelationFilter";

export type DeckWhereInput = {
  blackCards?: BlackCardListRelationFilter;
  game?: GameWhereUniqueInput;
  id?: StringFilter;
  identifier?: StringFilter;
  title?: StringNullableFilter;
  whiteCards?: WhiteCardListRelationFilter;
};
