import React from "react";
import {
  Create,
  ResourceComponentInjectedProps,
  useRedirect,
} from "react-admin";
import { transformUnit } from "../../utils/transforms";
import UnitForm from "./UnitForm";

export default function UnitCreate(props: ResourceComponentInjectedProps) {
  const redirect = useRedirect();
  return (
    <Create {...props} transform={transformUnit}>
      <UnitForm {...props} />
    </Create>
  );
}
