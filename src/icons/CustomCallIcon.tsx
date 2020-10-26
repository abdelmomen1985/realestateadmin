import React from "react";
import { SvgIcon } from "@material-ui/core";
import { ReactComponent as Icon } from "../assets/icons/call.svg";

export default function CustomCallIcon() {
  return (
    <SvgIcon height="24" width="24" viewBox="0 0 24 24">
      <Icon />
    </SvgIcon>
  );
}
