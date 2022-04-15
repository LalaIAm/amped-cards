import { Round } from "../round/Round";
import { Game } from "../game/Game";
import { WhiteCard } from "../whiteCard/WhiteCard";
import { User } from "../user/User";

export type Player = {
  createdAt: Date;
  czars?: Array<Round>;
  game?: Game | null;
  hand?: Array<WhiteCard>;
  id: string;
  score: number | null;
  updatedAt: Date;
  user?: User;
};
