import { Round as TRound } from "../api/round/Round";

export const ROUND_TITLE_FIELD = "id";

export const RoundTitle = (record: TRound): string => {
  return record.id || record.id;
};
