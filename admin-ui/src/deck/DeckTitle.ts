import { Deck as TDeck } from "../api/deck/Deck";

export const DECK_TITLE_FIELD = "title";

export const DeckTitle = (record: TDeck): string => {
  return record.title || record.id;
};
