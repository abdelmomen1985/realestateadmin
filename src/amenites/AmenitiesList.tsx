import React from "react";
import {
  ResourceComponentInjectedProps,
  Datagrid,
  DateField,
  List,
  TextField,
} from "react-admin";

export default function AmenitiesList(props: ResourceComponentInjectedProps) {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="name.en" />
        <TextField source="name.ar" />
        <DateField source="created_at" />
        <DateField source="updated_at" />
      </Datagrid>
    </List>
  );
}
