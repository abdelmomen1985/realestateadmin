import { Avatar, makeStyles } from "@material-ui/core";
import React from "react";
import {
  ChipField,
  Datagrid,
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

export default function TicketsList(props: ResourceComponentInjectedProps) {
  const classes = useMyDefaultStyles();
  return (
    <>
      <List {...props}>
        <Datagrid rowClick="edit">
          <TextField source="id" label="ID" headerClassName={classes.header} />

          <TextField
            source="properties.subject"
            label="Subject"
            headerClassName={classes.header}
            style={{ fontWeight: "bold" }}
          />

          <ChipField
            source="stage.label"
            label="Stage"
            headerClassName={classes.header}
          />
        </Datagrid>
      </List>
    </>
  );
}
