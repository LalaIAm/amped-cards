import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  player?: PlayerWhereUniqueInput | null;
  profile?: ProfileWhereUniqueInput | null;
  roles?: Array<string>;
  username?: string;
};
