import React from "react";
import {
  Datagrid,
  DateField,
  FunctionField,
  List,
  TextField,
} from "react-admin";
import { useMyDefaultStyles } from "../../styles/default";

export const DeveloperList = (props: any) => {
  const classes = useMyDefaultStyles();
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        {/* <TextField source="id" /> */}
        <TextField source="name.ar" headerClassName={classes.header} />
        <FunctionField
          render={(record) => `${record?.name?.en}`}
          headerClassName={classes.header}
          label="Name.en"
        />
        <DateField source="created_at" headerClassName={classes.header} />
        <DateField source="updated_at" headerClassName={classes.header} />
      </Datagrid>
    </List>
  );
};
