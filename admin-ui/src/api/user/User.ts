import { Player } from "../player/Player";
import { Profile } from "../profile/Profile";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  player?: Player | null;
  profile?: Profile | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
