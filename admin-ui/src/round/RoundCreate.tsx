import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { BlackCardTitle } from "../blackCard/BlackCardTitle";
import { PlayerTitle } from "../player/PlayerTitle";
import { GameTitle } from "../game/GameTitle";
import { WhiteCardTitle } from "../whiteCard/WhiteCardTitle";

export const RoundCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="blackcard.id"
          reference="BlackCard"
          label="Black Card"
        >
          <SelectInput optionText={BlackCardTitle} />
        </ReferenceInput>
        <ReferenceInput source="player.id" reference="Player" label="Czar">
          <SelectInput optionText={PlayerTitle} />
        </ReferenceInput>
        <ReferenceInput source="game.id" reference="Game" label="Game">
          <SelectInput optionText={GameTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="whitecard.id"
          reference="WhiteCard"
          label="Winning Card"
        >
          <SelectInput optionText={WhiteCardTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
