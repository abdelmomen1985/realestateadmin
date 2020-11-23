import { gql } from "@apollo/client";

export const DELETE_COMPANY = gql`
  mutation delete_company($id: ID!) {
    delete_company(id: $id) {
      success
    }
  }
`;

export const GET_COMPANIES = gql`
  query companies {
    companies {
      id
      properties {
        name
        name_ar
        logo
      }
    }
  }
`;

export const INSERT_COMPANY = gql`
  mutation insert_company($name: String!, $name_ar: String, $website: String) {
    insert_company(name: $name, name_ar: $name_ar, website: $website) {
      id
      properties {
        name
        name_ar
        logo
      }
    }
  }
`;
