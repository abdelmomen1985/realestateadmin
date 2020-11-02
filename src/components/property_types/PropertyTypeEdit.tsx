import React from "react";
import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";
import { transformPropertyType } from "../../utils/transforms";
import SingleImage from "../utils/SingleImage";

export default function PropertyTypeEdit(props: any) {
  return (
    <>
      <Edit {...props} transform={transformPropertyType}>
        <SimpleForm>
          <TextInput source="name.ar" />
          <TextInput source="name.en" />
          <SingleImage mediaIndex={"icon"} />
        </SimpleForm>
      </Edit>
    </>
  );
}
