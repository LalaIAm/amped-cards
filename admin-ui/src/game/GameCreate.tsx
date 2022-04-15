import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DeckTitle } from "../deck/DeckTitle";
import { PlayerTitle } from "../player/PlayerTitle";
import { RoundTitle } from "../round/RoundTitle";

export const GameCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="CurrentRound" source="currentRound" />
        <ReferenceArrayInput
          source="decks"
          reference="Deck"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DeckTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="players"
          reference="Player"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PlayerTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="rounds"
          reference="Round"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RoundTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="TotalRounds" source="totalRounds" />
      </SimpleForm>
    </Create>
  );
};
