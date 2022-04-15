import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileUpdateInput = {
  avatarUrl?: string | null;
  bio?: string | null;
  user?: UserWhereUniqueInput;
};
