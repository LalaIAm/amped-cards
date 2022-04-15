import { BlackCard } from "../blackCard/BlackCard";
import { Game } from "../game/Game";
import { WhiteCard } from "../whiteCard/WhiteCard";

export type Deck = {
  blackCards?: Array<BlackCard>;
  createdAt: Date;
  game?: Game | null;
  id: string;
  identifier: string;
  title: string | null;
  updatedAt: Date;
  whiteCards?: Array<WhiteCard>;
};
