import { Deck } from "../deck/Deck";
import { Round } from "../round/Round";

export type BlackCard = {
  createdAt: Date;
  deck?: Deck | null;
  discarded: boolean | null;
  id: string;
  rounds?: Array<Round>;
  text: string | null;
  updatedAt: Date;
};
