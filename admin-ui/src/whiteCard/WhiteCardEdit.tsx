import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { DeckTitle } from "../deck/DeckTitle";
import { PlayerTitle } from "../player/PlayerTitle";
import { RoundTitle } from "../round/RoundTitle";

export const WhiteCardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="deck.id" reference="Deck" label="Deck">
          <SelectInput optionText={DeckTitle} />
        </ReferenceInput>
        <BooleanInput label="Discoarded" source="discoarded" />
        <ReferenceInput source="player.id" reference="Player" label="Players">
          <SelectInput optionText={PlayerTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="rounds"
          reference="Round"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RoundTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Selected" source="selected" />
        <TextInput label="Text" source="text" />
      </SimpleForm>
    </Edit>
  );
};
