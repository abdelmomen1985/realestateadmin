import React from "react";
import { SimpleForm, TextInput } from "react-admin";

export default function CompanyForm({
  hasCreate,
  hasEdit,
  hasList,
  hasShow,
  basePath,
  ...props
}: any) {
  return (
    <SimpleForm {...props}>
      <TextInput source="name" />
      <TextInput source="name_ar" />
      <TextInput source="website" />
    </SimpleForm>
  );
}
