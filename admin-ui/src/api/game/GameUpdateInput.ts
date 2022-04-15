import { DeckUpdateManyWithoutGamesInput } from "./DeckUpdateManyWithoutGamesInput";
import { PlayerUpdateManyWithoutGamesInput } from "./PlayerUpdateManyWithoutGamesInput";
import { RoundUpdateManyWithoutGamesInput } from "./RoundUpdateManyWithoutGamesInput";

export type GameUpdateInput = {
  currentRound?: number | null;
  decks?: DeckUpdateManyWithoutGamesInput;
  players?: PlayerUpdateManyWithoutGamesInput;
  rounds?: RoundUpdateManyWithoutGamesInput;
  totalRounds?: number;
};
