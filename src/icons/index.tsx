import React from "react";
import { SvgIcon } from "@material-ui/core";
import { ReactComponent as CustomCall } from "../assets/icons/call.svg";
import { ReactComponent as CustomHome } from "../assets/icons/home.svg";
import { ReactComponent as CustomAmenities } from "../assets/icons/amenities.svg";
import { ReactComponent as CustomAgencies } from "../assets/icons/agencies.svg";
import { ReactComponent as CustomUsers } from "../assets/icons/users.svg";

export const CustomCallIcon = () => {
  return (
    <SvgIcon height="24" width="24" viewBox="0 0 24 24">
      <CustomCall />
    </SvgIcon>
  );
};

export const CustomHomeIcon = () => {
  return (
    <SvgIcon height="512" width="512" viewBox="0 0 512 512">
      <CustomHome />
    </SvgIcon>
  );
};

export const CustomAmenitiesIcon = () => {
  return (
    <SvgIcon height="512" width="512" viewBox="0 0 512 512">
      <CustomAmenities />
    </SvgIcon>
  );
};

export const CustomAgenciesIcon = () => {
  return (
    <SvgIcon height="512" width="512" viewBox="0 0 33.834 33.834">
      <CustomAgencies />
    </SvgIcon>
  );
};

export const CustomUsersIcon = () => {
  return (
    <SvgIcon height="512" width="512" viewBox="0 0 512 512">
      <CustomUsers />
    </SvgIcon>
  );
};
