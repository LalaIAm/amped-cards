import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { BlackCardTitle } from "../blackCard/BlackCardTitle";
import { GameTitle } from "../game/GameTitle";
import { WhiteCardTitle } from "../whiteCard/WhiteCardTitle";

export const DeckEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="blackCards"
          reference="BlackCard"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BlackCardTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="game.id" reference="Game" label="Game">
          <SelectInput optionText={GameTitle} />
        </ReferenceInput>
        <TextInput label="Identifier" source="identifier" />
        <TextInput label="Title" source="title" />
        <ReferenceArrayInput
          source="whiteCards"
          reference="WhiteCard"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WhiteCardTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
