import { Avatar, makeStyles } from "@material-ui/core";
import React from "react";
import {
  Datagrid,
  DateField,
  List,
  ResourceComponentInjectedProps,
  TextField,
} from "react-admin";
import { useMyDefaultStyles } from "../styles/default";
import { deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

const AvatarField = ({ record }: any) => {
  const classes = useStyles();
  return (
    <Avatar
      className={classes.purple}
      src={record.properties.logo}
      alt={(record.properties.name as string).toUpperCase()}
    ></Avatar>
  );
};
export default function CompaniesList(props: ResourceComponentInjectedProps) {
  const classes = useMyDefaultStyles();
  return (
    <>
      <List {...props}>
        <Datagrid rowClick="edit">
          <TextField
            source="id"
            label="ID"
            headerClassName={classes.header}
          />
          <AvatarField />
          <TextField
            source="properties.name"
            label="Name"
            headerClassName={classes.header}
          />
          <TextField
            source="properties.name_ar"
            label="Name Ar"
            headerClassName={classes.header}
          />
        </Datagrid>
      </List>
    </>
  );
}
