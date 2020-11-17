import { Grid } from "@material-ui/core";
// @ts-ignore
import RichTextInput from "ra-input-rich-text";
import React from "react";
import {
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { useMyDefaultStyles } from "../../styles/default";
import PhasesWidget from "../phases/PhasesWidget";
import SingleImage from "../utils/SingleImage";

const SanitizedFormContent = () => {
  const classes = useMyDefaultStyles();
  return (
    <>
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
    </>
  );
};
// To just ignore them
export default function CompoundForm({
  hasCreate,
  hasEdit,
  hasList,
  hasShow,
  basePath,
  ...props
}: any) {
  return (
    <SimpleForm {...props}>
      <SanitizedFormContent />
    </SimpleForm>
  );
}
