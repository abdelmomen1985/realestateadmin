import { Grid, makeStyles } from "@material-ui/core";
// @ts-ignore
import RichTextInput from "ra-input-rich-text";
import React, { useState } from "react";
import {
  Edit,
  ResourceComponentInjectedProps,
  SimpleForm,
  TextInput,
} from "react-admin";
import { transformDeveloper } from "../../utils/transforms";
import SingleImage from "../utils/SingleImage";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  fullwidth: {
    width: "100%",
  },
}));

/*
const CustomArea = ({ record = {}, source }: any) => (
  {record?.media?.logoUrl ? <span>img</span> : <span>drop</span>}
)
*/

export default function DeveloperEdit(props: ResourceComponentInjectedProps) {
  const classes = useStyles();
  return (
    <Edit {...props} transform={transformDeveloper} className={classes.root}>
      <SimpleForm>
        <SingleImage mediaIndex="logo" />
        <Grid container spacing={3} className={classes.fullwidth}>
          <Grid item xs={12} md={6}>
            <TextInput source="name.ar" className={classes.fullwidth} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput source="name.en" className={classes.fullwidth} />
          </Grid>
        </Grid>
        <div className="editor-ar fullwidth">
          <RichTextInput source="description.ar" />
        </div>
        <RichTextInput source="description.en" />
      </SimpleForm>
    </Edit>
  );
}
