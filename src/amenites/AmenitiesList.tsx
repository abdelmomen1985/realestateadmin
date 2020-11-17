import React from "react";
import {
  ResourceComponentInjectedProps,
  Datagrid,
  DateField,
  List,
  TextField,
} from "react-admin";
import { useMyDefaultStyles } from "../styles/default";

export default function AmenitiesList(props: ResourceComponentInjectedProps) {
  const classes = useMyDefaultStyles();
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="name.en" headerClassName={classes.header} />
        <TextField source="name.ar" headerClassName={classes.header} />
        <DateField source="created_at" headerClassName={classes.header} />
        <DateField source="updated_at" headerClassName={classes.header} />
      </Datagrid>
    </List>
  );
}
