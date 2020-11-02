import { Button, Grid } from "@material-ui/core";
// @ts-ignore
import RichTextInput from "ra-input-rich-text";
import React, { useEffect, useState } from "react";
import {
  ChipField,
  ReferenceInput,
  ReferenceManyField,
  SelectInput,
  SimpleForm,
  SingleFieldList,
  TextInput,
  useRefresh,
} from "react-admin";
import { useMyDefaultStyles } from "../../styles/default";
import PhasesWidget from "../phases/PhasesWidget";
import SingleImage from "../utils/SingleImage";

export default function CompoundForm(props: any) {
  const classes = useMyDefaultStyles();
  const [changeLogo, setChangeLogo] = useState(false);

  useEffect(() => {
    console.log("%c Mo2Log CompoundForm refresh", "background: #bada55");
  }, []);

  return (
    <SimpleForm {...props}>
      <SingleImage mediaIndex="logo" />
      <ReferenceInput source="developer_id" reference="developers">
        <SelectInput optionText="name.en" />
      </ReferenceInput>
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
      {/** 
      <ReferenceManyField
        label="Compound Phases"
        reference="comp_phases"
        target="compound_id"
      >
        <SingleFieldList>
          <ChipField source="phase_name.ar" />
        </SingleFieldList>
      </ReferenceManyField>
    */}
      <PhasesWidget />
    </SimpleForm>
  );
}
