import { WhiteCardWhereInput } from "./WhiteCardWhereInput";
import { WhiteCardOrderByInput } from "./WhiteCardOrderByInput";

export type WhiteCardFindManyArgs = {
  where?: WhiteCardWhereInput;
  orderBy?: Array<WhiteCardOrderByInput>;
  skip?: number;
  take?: number;
};
