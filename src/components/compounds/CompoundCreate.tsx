import React from "react";
import {
  Create,
  ResourceComponentInjectedProps,
  useRedirect,
} from "react-admin";
import { transformCompound } from "../../utils/transforms";
import CompoundForm from "./CompoundForm";

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
      transform={transformCompound}
    >
      <CompoundForm {...props} />
    </Create>
  );
}
/*
<SimpleForm toolbar={<CustomSFormToolbar />}>
        <ReferenceInput source="developer_id" reference="developers">
          <SelectInput optionText="name.en" />
        </ReferenceInput>
        <TextInput source="name.ar" />
        <TextInput source="name.en" />
      </SimpleForm>*/
