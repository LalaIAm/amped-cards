import { WhiteCard as TWhiteCard } from "../api/whiteCard/WhiteCard";

export const WHITECARD_TITLE_FIELD = "text";

export const WhiteCardTitle = (record: TWhiteCard): string => {
  return record.text || record.id;
};
