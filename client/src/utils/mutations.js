import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const REGISTER_USER = gql`
  mutation registerUser(
    $firstName: String!
    $lastName: String!
    $address: String!
    $email: String!
    $password: String!
  ) {
    registerUser(
      firstName: $firstName
      lastName: $lastName
      address: $address
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;