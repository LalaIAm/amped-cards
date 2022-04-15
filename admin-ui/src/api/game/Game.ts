import { Deck } from "../deck/Deck";
import { Player } from "../player/Player";
import { Round } from "../round/Round";

export type Game = {
  createdAt: Date;
  currentRound: number | null;
  decks?: Array<Deck>;
  id: string;
  players?: Array<Player>;
  rounds?: Array<Round>;
  totalRounds: number;
  updatedAt: Date;
};
