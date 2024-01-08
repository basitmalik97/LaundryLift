const typeDefs = `
type User {
    _id: ID
    username: String
}

type Auth {
    token: ID
    user: User
}

`