import { JsonLangsProp } from "./common";

export const UNIT_RESOURCE_NAME = "units";

export type UnitType = {
  id: string;
  created_at: string;
  updated_at: string;
  description: JsonLangsProp;
  finishing_type: string;
  unit_design: string;
  media: any;
};
