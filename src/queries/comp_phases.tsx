import { gql } from "@apollo/client";

export const COMP_PHASES = gql`
  query comp_phases($compound_id: uuid!) {
    comp_phases(where: { compound_id: { _eq: $compound_id } }) {
      id
      phase_name
      delivery_month
      delivery_year
      compound_id
    }
  }
`;

export const INSERT_COMP_PHASES_ONE = gql`
  mutation insert_comp_phases_one($compound_id: uuid!, $phase_name: json!) {
    insert_comp_phases_one(
      object: { compound_id: $compound_id, phase_name: $phase_name }
    ) {
      id
    }
  }
`;

export const INSERT_COMP_PHASES = gql`
  mutation insert_comp_phases($phases: [comp_phases_insert_input!]!) {
    insert_comp_phases(objects: $phases) {
      returning {
        id
      }
    }
  }
`;
