import React from "react";
import { SvgIcon } from "@material-ui/core";
import { ReactComponent as Logo } from "../assets/icons/home.svg";

export default function CustomHomeIcon() {
  return (
    <SvgIcon height="512" width="512" viewBox="0 0 512 512">
      <Logo />
    </SvgIcon>
  );
}
