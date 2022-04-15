import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GameList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Games"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="CurrentRound" source="currentRound" />
        <TextField label="ID" source="id" />
        <TextField label="TotalRounds" source="totalRounds" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
