import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { DeckTitle } from "../deck/DeckTitle";
import { RoundTitle } from "../round/RoundTitle";

export const BlackCardCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="deck.id" reference="Deck" label="Deck">
          <SelectInput optionText={DeckTitle} />
        </ReferenceInput>
        <BooleanInput label="Discarded" source="discarded" />
        <ReferenceArrayInput
          source="rounds"
          reference="Round"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RoundTitle} />
        </ReferenceArrayInput>
        <TextInput label="Text" source="text" />
      </SimpleForm>
    </Create>
  );
};
