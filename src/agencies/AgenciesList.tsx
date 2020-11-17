import React from "react";
import {
  Datagrid,
  DateField,
  List,
  ResourceComponentInjectedProps,
  TextField,
} from "react-admin";
import { useMyDefaultStyles } from "../styles/default";

export default function AgenciesList(props: ResourceComponentInjectedProps) {
  const classes = useMyDefaultStyles();
  return (
    <>
      <List {...props}>
        <Datagrid rowClick="edit">
          <TextField source="name.ar" />
          <TextField source="name.en" />
          <DateField source="created_at" />
          <DateField source="updated_at" />
        </Datagrid>
      </List>
    </>
  );
}
