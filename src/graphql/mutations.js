import { gql } from "@apollo/client";

//example of a mutation to create a user

export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!) {
    createUser(input: { name: $name, email: $email }) {
      id
      name
    }
  }
`;

export const UPDATE_USER = gql`
  mutation ($id: ID!, $name: String, $email: String) {
    updateUser(id: $id, input: { name: $name, email: $email }) {
      id
      name
      email
    }
  }
`;

export const DELETE_USER = gql`
  mutation ($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;
