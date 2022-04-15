import { RoundUpdateManyWithoutPlayersInput } from "./RoundUpdateManyWithoutPlayersInput";
import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { WhiteCardUpdateManyWithoutPlayersInput } from "./WhiteCardUpdateManyWithoutPlayersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PlayerUpdateInput = {
  czars?: RoundUpdateManyWithoutPlayersInput;
  game?: GameWhereUniqueInput | null;
  hand?: WhiteCardUpdateManyWithoutPlayersInput;
  score?: number | null;
  user?: UserWhereUniqueInput;
};
