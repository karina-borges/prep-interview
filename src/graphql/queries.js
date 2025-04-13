import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      capital
      currency
      languages {
        name
      }
    }
  }
`;

export const GET_COUNTRY_BY_CODE = gql`
  query ($code: ID!) {
    country(code: $code) {
      name
      capital
      currency
      languages {
        name
      }
    }
  }
`;
