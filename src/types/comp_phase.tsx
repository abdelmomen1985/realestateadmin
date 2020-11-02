import { JsonLangsProp } from "./common";

export const COMP_PHASE_RESOURCE_NAME = "comp_phases";

export type CompPhaseType = {
  id: string;
  created_at: string;
  updated_at: string;
  phase_name: JsonLangsProp;
  compound_id: string;
  ext_data: any;
};
