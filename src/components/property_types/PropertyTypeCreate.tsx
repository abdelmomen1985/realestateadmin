import React from "react";
import {
  SimpleForm,
  TextInput,
  Create,
  useRedirect,
  ResourceComponentInjectedProps,
} from "react-admin";

export default function PropertyTypeCreate(
  props: ResourceComponentInjectedProps
) {
  const redirect = useRedirect();
  return (
    <Create
      {...props}
      onSuccess={() => {
        redirect("list", props.basePath);
      }}
    >
      <SimpleForm>
        <TextInput source="name.ar" />
        <TextInput source="name.en" />
      </SimpleForm>
    </Create>
  );
}
