import { JsonLangsProp } from "./common";

export const COMPOUND_RESOURCE_NAME = "compounds";

export type CompoundType = {
  created_at: string;
  description: JsonLangsProp;
  ext_data: any;
  id: string;
  media: any;
  name: JsonLangsProp;
  slug_ar: string;
  slug_en: string;
  updated_at: string;
};
