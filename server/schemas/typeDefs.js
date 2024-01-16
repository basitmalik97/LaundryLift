const typeDefs = `
type User {
    _id: ID
    email: String
    firstName: String
    lastName: String
    address: String
}

type Auth {
    token: ID
    user: User
}

type Query {
    user: User
}

type Mutation {
    registerUser(firstName: String!, lastName: String!, email: String!, address: String!, password: String! ): Auth

    loginUser(email: String!, password: String!): Auth
}
`
module.exports = typeDefs;