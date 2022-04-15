import { BlackCardWhereUniqueInput } from "../blackCard/BlackCardWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { WhiteCardWhereUniqueInput } from "../whiteCard/WhiteCardWhereUniqueInput";

export type RoundWhereInput = {
  blackCard?: BlackCardWhereUniqueInput;
  czar?: PlayerWhereUniqueInput;
  game?: GameWhereUniqueInput;
  id?: StringFilter;
  winningCard?: WhiteCardWhereUniqueInput;
};
