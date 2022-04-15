import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BLACKCARD_TITLE_FIELD } from "../blackCard/BlackCardTitle";
import { PLAYER_TITLE_FIELD } from "../player/PlayerTitle";
import { GAME_TITLE_FIELD } from "../game/GameTitle";
import { WHITECARD_TITLE_FIELD } from "./WhiteCardTitle";
import { DECK_TITLE_FIELD } from "../deck/DeckTitle";

export const WhiteCardShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Deck" source="deck.id" reference="Deck">
          <TextField source={DECK_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="Discoarded" source="discoarded" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Players" source="player.id" reference="Player">
          <TextField source={PLAYER_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="Selected" source="selected" />
        <TextField label="Text" source="text" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Round"
          target="WhiteCardId"
          label="Rounds"
        >
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
