import { DeckCreateNestedManyWithoutGamesInput } from "./DeckCreateNestedManyWithoutGamesInput";
import { PlayerCreateNestedManyWithoutGamesInput } from "./PlayerCreateNestedManyWithoutGamesInput";
import { RoundCreateNestedManyWithoutGamesInput } from "./RoundCreateNestedManyWithoutGamesInput";

export type GameCreateInput = {
  currentRound?: number | null;
  decks?: DeckCreateNestedManyWithoutGamesInput;
  players?: PlayerCreateNestedManyWithoutGamesInput;
  rounds?: RoundCreateNestedManyWithoutGamesInput;
  totalRounds: number;
};
