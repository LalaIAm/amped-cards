import { RoundCreateNestedManyWithoutPlayersInput } from "./RoundCreateNestedManyWithoutPlayersInput";
import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { WhiteCardCreateNestedManyWithoutPlayersInput } from "./WhiteCardCreateNestedManyWithoutPlayersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PlayerCreateInput = {
  czars?: RoundCreateNestedManyWithoutPlayersInput;
  game?: GameWhereUniqueInput | null;
  hand?: WhiteCardCreateNestedManyWithoutPlayersInput;
  score?: number | null;
  user?: UserWhereUniqueInput;
};
