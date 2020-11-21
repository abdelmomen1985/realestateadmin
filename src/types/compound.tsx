import { JsonLangsProp } from "./common";

export const COMPOUND_RESOURCE_NAME = "compounds";

export type CompoundType = {
  id: string;
  created_at: string;
  updated_at: string;
  name: JsonLangsProp;
  description: JsonLangsProp;
  ext_data: any;
  media: any;
  slug_ar: string;
  slug_en: string;
  developer_id: string;
  sk_id: string;
  city_sk_id: string;
  district_sk_id: string;
  east: number;
  north: number;
  west: number;
  south: number;
};
