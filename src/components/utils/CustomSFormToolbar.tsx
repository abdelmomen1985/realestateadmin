import React from "react";
import { SaveButton, Toolbar } from "react-admin";

export default function CustomSFormToolba(props: any) {
  // must pass props
  return (
    <Toolbar {...props}>
      <SaveButton label={"Add"} />
    </Toolbar>
  );
}
