import React from "react";
import { Edit } from "react-admin";
import { transformCompound } from "../../utils/transforms";
import CompoundForm from "./CompoundForm";

const CompoundEditTitle = ({ record }: any) => {
  return <>{`Edit Compound ${record.name.en}`}</>;
};
export const CompoundEdit = (props: any) => (
  <>
    <Edit
      {...props}
      transform={transformCompound}
      title={<CompoundEditTitle />}
    >
      <CompoundForm />
    </Edit>
  </>
);
