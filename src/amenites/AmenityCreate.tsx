import React from "react";
import { Create } from "react-admin";
import AmenityForm from "./AmenityForm";

export default function AmenityCreate(props: any) {
  return (
    <Create {...props}>
      <AmenityForm {...props} />
    </Create>
  );
}
