import { JsonLangsProp } from "./common";

export const COMPOUND_RESOURCE_NAME = "front_actions";

export type DeveloperType = {
  id: string;
  action_name: JsonLangsProp;
  created_at: string;
  updated_at: string;
  description: JsonLangsProp;
  ext_data: any;
  media: any;
};
