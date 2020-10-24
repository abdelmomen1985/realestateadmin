import React from "react";
import {
  List,
  Datagrid,
  ReferenceField,
  TextField,
  DateField,
  ResourceComponentInjectedProps,
} from "react-admin";
import { useMyDefaultStyles } from "../../styles/default";

export const CompoundsList = (props: ResourceComponentInjectedProps) => {
  const classes = useMyDefaultStyles();
  return (
    <>
      <List {...props}>
        <Datagrid rowClick="edit">
          {/* <TextField source="id" /> */}
          <TextField source="name.ar" headerClassName={classes.header} />
          <TextField source="name.en" headerClassName={classes.header} />

          <ReferenceField
            source="developer_id"
            reference="developers"
            headerClassName={classes.header}
          >
            <TextField source="name.en" />
          </ReferenceField>
          <DateField source="created_at" headerClassName={classes.header} />
          <DateField source="updated_at" headerClassName={classes.header} />
        </Datagrid>
      </List>
    </>
  );
};
