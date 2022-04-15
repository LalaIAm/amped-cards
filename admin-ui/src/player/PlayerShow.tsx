import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BLACKCARD_TITLE_FIELD } from "../blackCard/BlackCardTitle";
import { PLAYER_TITLE_FIELD } from "./PlayerTitle";
import { GAME_TITLE_FIELD } from "../game/GameTitle";
import { WHITECARD_TITLE_FIELD } from "../whiteCard/WhiteCardTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PlayerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Game" source="game.id" reference="Game">
          <TextField source={GAME_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Score" source="score" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField reference="Round" target="PlayerId" label="Rounds">
          <Datagrid rowClick="show">
            <ReferenceField
              label="Black Card"
              source="blackcard.id"
              reference="BlackCard"
            >
              <TextField source={BLACKCARD_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Czar" source="player.id" reference="Player">
              <TextField source={PLAYER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Game" source="game.id" reference="Game">
              <TextField source={GAME_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Winning Card"
              source="whitecard.id"
              reference="WhiteCard"
            >
              <TextField source={WHITECARD_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
