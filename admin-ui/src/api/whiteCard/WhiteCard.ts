import { Deck } from "../deck/Deck";
import { Player } from "../player/Player";
import { Round } from "../round/Round";

export type WhiteCard = {
  createdAt: Date;
  deck?: Deck | null;
  discoarded: boolean | null;
  id: string;
  players?: Player | null;
  rounds?: Array<Round>;
  selected: boolean | null;
  text: string;
  updatedAt: Date;
};
