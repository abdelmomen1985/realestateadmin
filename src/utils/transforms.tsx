import { Record } from "react-admin";
import { CompoundType } from "../types/compound";
import { DeveloperType } from "../types/developer";
import { UnitType } from "../types/unit";
import { string_to_slug } from "./common";

export const transformDeveloper = (data: Record) => {
  data.media = { logo: data.internal?.url };
  delete data.internal;
  let developer = data as DeveloperType;
  data.slug_en = string_to_slug(data.name.en);
  data.slug_ar = string_to_slug(data.name.ar);
  return developer as Record;
};

export const transformCompound = (data: Record) => {
  console.log("%c Mo2Log transformCompound data ", "background: #bada55", data);
  data.media = { logo: data.internal?.url };
  delete data.internal;
  let compound = data as CompoundType;
  data.slug_en = string_to_slug(data.name.en);
  data.slug_ar = string_to_slug(data.name.ar);
  return compound as Record;
};

export const transformPropertyType = (data: Record) => {
  data.media = { icon: data.internal?.url };
  delete data.internal;
  return data;
};

export const transformUnit = (data: Record) => {
  data.media = { logo: data.internal?.url };
  delete data.internal;
  let unit = data as UnitType;

  return unit as Record;
};
