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
  BooleanField,
} from "react-admin";

import { DECK_TITLE_FIELD } from "./DeckTitle";
import { PLAYER_TITLE_FIELD } from "../player/PlayerTitle";
import { GAME_TITLE_FIELD } from "../game/GameTitle";

export const DeckShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Game" source="game.id" reference="Game">
          <TextField source={GAME_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Identifier" source="identifier" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="BlackCard"
          target="DeckId"
          label="Black Cards"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Deck" source="deck.id" reference="Deck">
              <TextField source={DECK_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="Discarded" source="discarded" />
            <TextField label="ID" source="id" />
            <TextField label="Text" source="text" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WhiteCard"
          target="DeckId"
          label="White Cards"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Deck" source="deck.id" reference="Deck">
              <TextField source={DECK_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="Discoarded" source="discoarded" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Players"
              source="player.id"
              reference="Player"
            >
              <TextField source={PLAYER_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="Selected" source="selected" />
            <TextField label="Text" source="text" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
