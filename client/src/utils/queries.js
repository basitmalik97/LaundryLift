import { gql } from "@apollo/client"

export const GET_USER = gql`
    getUser {
      _id
      email
      firstName
      lastName
      address
    }
  }`