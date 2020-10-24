import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  ResourceComponentInjectedProps,
} from "react-admin";
import { useMyDefaultStyles } from "../../styles/default";

export default function PropertyTypesList(
  props: ResourceComponentInjectedProps
) {
  const classes = useMyDefaultStyles();
  // get options
  let { showStar } = props.options;

  return (
    <>
      {showStar && <span>*</span>}
      <List {...props}>
        <Datagrid rowClick="edit">
          <TextField source="name.ar" headerClassName={classes.header} />
          <TextField source="name.en" headerClassName={classes.header} />
          <DateField source="updated_at" headerClassName={classes.header} />
          <DateField source="created_at" headerClassName={classes.header} />
        </Datagrid>
      </List>
    </>
  );
}
