import { gql } from "@apollo/client";

export const GET_TICKETS = gql`
  query tickets {
    tickets {
      id
      stage {
        label
      }
      archived
      properties {
        subject
        content
      }
    }
  }
`;
