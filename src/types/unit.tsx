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
  property_type_id: string;
  compound_id: string;
  developer_id: string;
  comp_phase_id: string;
  delivery_year: number;
  delivery_month: number;
  deleted_at: string;
  ref_id: string;
  sk_id: string;
  slug_en: string;
  slug_ar: string;
  lat: number;
  lng: number;
  fin_down_payment: number;
  fin_years: number;
  fin_monthly_payment: number;
  fin_total: number;
  bathrooms: number;
  bedrooms: number;
  npv: number;
  bua: number;
  land: number;
  amenities_arr: any[];
  sk_city: any;
  sk_district: any;
};
