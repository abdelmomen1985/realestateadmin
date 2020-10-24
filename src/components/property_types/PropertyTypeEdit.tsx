import React from "react";
import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

export default function PropertyTypeEdit(props: any) {
  return (
    <>
      <Edit {...props}>
        <SimpleForm>
          <TextInput source="name.ar" />
          <TextInput source="name.en" />
        </SimpleForm>
      </Edit>
    </>
  );
}
