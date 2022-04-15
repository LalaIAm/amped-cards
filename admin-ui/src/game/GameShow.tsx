import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { GAME_TITLE_FIELD } from "./GameTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { BLACKCARD_TITLE_FIELD } from "../blackCard/BlackCardTitle";
import { PLAYER_TITLE_FIELD } from "../player/PlayerTitle";
import { WHITECARD_TITLE_FIELD } from "../whiteCard/WhiteCardTitle";

export const GameShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="CurrentRound" source="currentRound" />
        <TextField label="ID" source="id" />
        <TextField label="TotalRounds" source="totalRounds" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Deck" target="GameId" label="Decks">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Game" source="game.id" reference="Game">
              <TextField source={GAME_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Identifier" source="identifier" />
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Player" target="GameId" label="Players">
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Round" target="GameId" label="Rounds">
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
