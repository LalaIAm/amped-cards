import { DeckListRelationFilter } from "../deck/DeckListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlayerListRelationFilter } from "../player/PlayerListRelationFilter";
import { RoundListRelationFilter } from "../round/RoundListRelationFilter";

export type GameWhereInput = {
  decks?: DeckListRelationFilter;
  id?: StringFilter;
  players?: PlayerListRelationFilter;
  rounds?: RoundListRelationFilter;
};
