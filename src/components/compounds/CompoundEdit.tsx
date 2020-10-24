import React from "react";
import {
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateInput,
} from "react-admin";

export const CompoundEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput source="developer_id" reference="developers">
        <SelectInput optionText="name.ar" />
      </ReferenceInput>
      <TextInput source="name.ar" />
      <TextInput source="name.en" />
    </SimpleForm>
  </Edit>
);
