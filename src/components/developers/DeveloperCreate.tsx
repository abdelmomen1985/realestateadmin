import React, { useEffect, useState } from "react";
import {
  Create,
  ResourceComponentInjectedProps,
  SimpleForm,
  TextInput,
  useRedirect,
} from "react-admin";
import { string_to_slug } from "../../utils/common";
import { transformDeveloper } from "../../utils/transforms";
import CustomSFormToolbar from "../utils/CustomSFormToolbar";
import DropImageToFire from "../utils/DropImageToFire";

export default function DeveloperCreate(props: ResourceComponentInjectedProps) {
  const redirect = useRedirect();
  const [logoUrl, setLogoUrl] = useState("");
  useEffect(() => {
    console.log("%c Mo2Log logoUrl changed", "background: #bada55", logoUrl);
  }, [logoUrl]);
  return (
    <Create
      {...props}
      options={{ logoURL: logoUrl }}
      onSuccess={() => {
        redirect("list", props.basePath);
      }}
      transform={transformDeveloper}
    >
      <SimpleForm toolbar={<CustomSFormToolbar />}>
        <TextInput source="name.ar" />
        <TextInput source="name.en" />

        <DropImageToFire />
      </SimpleForm>
    </Create>
  );
}
