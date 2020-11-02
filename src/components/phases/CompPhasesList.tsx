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

export default function CompPhasesList(props: ResourceComponentInjectedProps) {
  const classes = useMyDefaultStyles();
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <ReferenceField
          source="compound_id"
          headerClassName={classes.header}
          reference="compounds"
        >
          <TextField source="name.ar" />
        </ReferenceField>

        <TextField source="phase_name.ar" headerClassName={classes.header} />
        <TextField source="phase_name.en" headerClassName={classes.header} />
        <DateField source="created_at" headerClassName={classes.header} />
        {/** TODO Custom Field */}
        <TextField source="delivery_month" headerClassName={classes.header} />
        <TextField source="delivery_year" headerClassName={classes.header} />
      </Datagrid>
    </List>
  );
}
