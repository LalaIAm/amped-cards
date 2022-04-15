import { RoundWhereInput } from "./RoundWhereInput";
import { RoundOrderByInput } from "./RoundOrderByInput";

export type RoundFindManyArgs = {
  where?: RoundWhereInput;
  orderBy?: Array<RoundOrderByInput>;
  skip?: number;
  take?: number;
};
