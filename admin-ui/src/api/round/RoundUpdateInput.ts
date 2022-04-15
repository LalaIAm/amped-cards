import { BlackCardWhereUniqueInput } from "../blackCard/BlackCardWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { WhiteCardWhereUniqueInput } from "../whiteCard/WhiteCardWhereUniqueInput";

export type RoundUpdateInput = {
  blackCard?: BlackCardWhereUniqueInput | null;
  czar?: PlayerWhereUniqueInput | null;
  game?: GameWhereUniqueInput | null;
  winningCard?: WhiteCardWhereUniqueInput | null;
};
