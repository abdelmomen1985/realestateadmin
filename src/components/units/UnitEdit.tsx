import React from "react";
import { Edit } from "react-admin";
import { transformUnit } from "../../utils/transforms";
import UnitForm from "./UnitForm";

export const UnitEdit = (props: any) => (
  <>
    <Edit {...props} transform={transformUnit}>
      <UnitForm />
    </Edit>
  </>
);
