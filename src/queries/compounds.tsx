import { gql } from "@apollo/client";

export const COMPOUNDS_GET = gql`
  query COMPOUNDS_GET {
    compounds {
      name
    }
  }
`;
