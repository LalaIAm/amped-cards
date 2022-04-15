import { BlackCard } from "../blackCard/BlackCard";
import { Player } from "../player/Player";
import { Game } from "../game/Game";
import { WhiteCard } from "../whiteCard/WhiteCard";

export type Round = {
  blackCard?: BlackCard | null;
  createdAt: Date;
  czar?: Player | null;
  game?: Game | null;
  id: string;
  updatedAt: Date;
  winningCard?: WhiteCard | null;
};
