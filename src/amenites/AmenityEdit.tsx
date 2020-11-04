import React from "react";
import { Edit } from "react-admin";
import AmenityForm from "./AmenityForm";

export default function AmenityEdit(props: any) {
  return (
    <>
      <Edit>
        <AmenityForm {...props} />
      </Edit>
    </>
  );
}
