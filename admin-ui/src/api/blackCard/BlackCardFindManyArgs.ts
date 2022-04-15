import { BlackCardWhereInput } from "./BlackCardWhereInput";
import { BlackCardOrderByInput } from "./BlackCardOrderByInput";

export type BlackCardFindManyArgs = {
  where?: BlackCardWhereInput;
  orderBy?: Array<BlackCardOrderByInput>;
  skip?: number;
  take?: number;
};
