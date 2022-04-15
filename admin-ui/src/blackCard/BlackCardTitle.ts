import { BlackCard as TBlackCard } from "../api/blackCard/BlackCard";

export const BLACKCARD_TITLE_FIELD = "text";

export const BlackCardTitle = (record: TBlackCard): string => {
  return record.text || record.id;
};
