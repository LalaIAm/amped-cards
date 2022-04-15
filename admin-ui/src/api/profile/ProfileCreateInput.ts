import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileCreateInput = {
  avatarUrl?: string | null;
  bio?: string | null;
  user?: UserWhereUniqueInput;
};
