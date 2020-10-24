import React from "react";
import {
  Create,
  ReferenceInput,
  ResourceComponentInjectedProps,
  SelectInput,
  SimpleForm,
  TextInput,
  useRedirect,
} from "react-admin";

export default function UserCreate(props: ResourceComponentInjectedProps) {
  const redirect = useRedirect();
  return (
    <>
      <Create
        {...props}
        onSuccess={() => {
          redirect("list", props.basePath);
        }}
        transform={(data) => {
          console.log(data);
          data.username = data.email;
          return data;
        }}
      >
        <SimpleForm>
          <TextInput source="name" />
          <TextInput source="email" />
        </SimpleForm>
      </Create>
    </>
  );
}
