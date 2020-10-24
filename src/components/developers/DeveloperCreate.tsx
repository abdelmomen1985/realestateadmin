import React from "react";
import {
  SimpleForm,
  TextInput,
  Create,
  useRedirect,
  ResourceComponentInjectedProps,
} from "react-admin";

import { string_to_slug } from "../../utils/common";
import CustomSFormToolbar from "../utils/CustomSFormToolbar";

export default function DeveloperCreate(props: ResourceComponentInjectedProps) {
  const redirect = useRedirect();

  return (
    <Create
      {...props}
      onSuccess={() => {
        redirect("list", props.basePath);
      }}
      transform={(data) => {
        console.log(data);
        data.slug_en = string_to_slug(data.name.en);
        data.slug_ar = string_to_slug(data.name.ar);
        return data;
      }}
    >
      <SimpleForm toolbar={<CustomSFormToolbar />}>
        <TextInput source="name.ar" />
        <TextInput source="name.en" />
      </SimpleForm>
    </Create>
  );
}
