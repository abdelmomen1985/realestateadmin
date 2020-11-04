import { Grid } from "@material-ui/core";
import React from "react";
import {
  CheckboxGroupInput,
  ReferenceArrayInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
} from "react-admin";
import { useMyDefaultStyles } from "../../styles/default";
// @ts-ignore
import RichTextInput from "ra-input-rich-text";

export default function UnitForm(props: any) {
  const classes = useMyDefaultStyles();
  return (
    <SimpleForm {...props}>
      <Grid container spacing={3} className={classes.fullwidth}>
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
    </SimpleForm>
  );
}
