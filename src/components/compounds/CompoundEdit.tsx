import React from "react";
import { Edit } from "react-admin";
import { transformCompound } from "../../utils/transforms";
import CompoundForm from "./CompoundForm";

export const CompoundEdit = (props: any) => (
  <>
    <Edit {...props} transform={transformCompound}>
      <CompoundForm />
    </Edit>
  </>
);
