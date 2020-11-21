import { Grid } from "@material-ui/core";
import React from "react";
import {
  CheckboxGroupInput,
  ReferenceArrayInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { useMyDefaultStyles } from "../../styles/default";
// @ts-ignore
import RichTextInput from "ra-input-rich-text";

const SanitizedFormContent = () => {
  const classes = useMyDefaultStyles();
  return (
    <>
      <Grid container spacing={3} className={classes.fullwidth}>
        <Grid item xs={12} sm={6}>
          <TextInput
            source="ref_id"
            className={classes.fullwidth}
            placeholder="Reference Id"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ReferenceInput source="property_type_id" reference="property_types">
            <SelectInput optionText="name.en" />
          </ReferenceInput>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectInput
            source="finishing_type"
            choices={[
              { id: "FF", name: "FF" },
              { id: "SF", name: "SF" },
              { id: "CS", name: "CS" },
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ReferenceInput source="compound_id" reference="compounds">
            <SelectInput optionText="name.en" />
          </ReferenceInput>
        </Grid>

        <Grid item xs={12} sm={6}>
          <ReferenceInput source="comp_phase_id" reference="comp_phases">
            <SelectInput optionText="phase_name.en" />
          </ReferenceInput>
        </Grid>
      </Grid>
      <div className="fullwidth">
        <ReferenceArrayInput
          reference="amenities"
          resource=""
          source="amenities_arr"
          label="Amenities"
        >
          <CheckboxGroupInput optionText="name.en" optionValue="id" />
        </ReferenceArrayInput>
      </div>

      <div className="editor-ar fullwidth">
        <RichTextInput source="description.ar" />
      </div>

      <RichTextInput source="description.en" />
    </>
  );
};

// Just ignore hases
export default function UnitForm({
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
