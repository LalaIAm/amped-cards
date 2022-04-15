import { User } from "../user/User";

export type Profile = {
  avatarUrl: string | null;
  bio: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User;
};
