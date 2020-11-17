import React from "react";
import { Create } from "react-admin";
import CompanyForm from "./CompanyForm";

export default function CompanyCreate(props: any) {
  return (
    <Create {...props}>
      <CompanyForm {...props} />
    </Create>
  );
}
