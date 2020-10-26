import React from "react";
import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  ResourceComponentInjectedProps,
  TextField,
} from "react-admin";
import { useMyDefaultStyles } from "../../styles/default";

export default function UsersList(props: ResourceComponentInjectedProps) {
  const classes = useMyDefaultStyles();
  return (
    <>
      <List {...props}>
        <Datagrid rowClick="edit">
          {/* <TextField source="id" /> */}
          <TextField source="name" headerClassName={classes.header} />
          <TextField source="email" headerClassName={classes.header} />
        </Datagrid>
      </List>
    </>
  );
}
