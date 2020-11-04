import React from "react";
import { SimpleForm, TextInput } from "react-admin";

export default function AmenityForm(props: any) {
  return (
    <SimpleForm {...props}>
      <TextInput source="name.ar" />
      <TextInput source="name.en" />
    </SimpleForm>
  );
}
