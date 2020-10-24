import React from "react";
import {
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  Create,
  useRedirect,
  ResourceComponentInjectedProps,
  RedirectionSideEffect,
  useCreate,
} from "react-admin";
import { COMPOUND_RESOURCE_NAME } from "../../types/compound";
import { string_to_slug } from "../../utils/common";
import CustomSFormToolbar from "../utils/CustomSFormToolbar";

export default function CompoundCreate(props: ResourceComponentInjectedProps) {
  const redirect = useRedirect();
  /*
  const [create] = useCreate(COMPOUND_RESOURCE_NAME);

  const customSave = (values: object) => {
    console.log(values);
    create(
      {
        payload: { data: { ...values } },
      },
      {
        onSuccess: () => {
          redirect("list", props.basePath);
        },
      }
    );
  };
  */

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
        <ReferenceInput source="developer_id" reference="developers">
          <SelectInput optionText="name.en" />
        </ReferenceInput>
        <TextInput source="name.ar" />
        <TextInput source="name.en" />
      </SimpleForm>
    </Create>
  );
}
