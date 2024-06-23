export const typeDefs = `#graphql
    type Game {
    #! means it is not allowed to be null
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }
    # Query type is NOT optional and is used to define entry points and return the data types
    type Query {
        games: [Game]
        game(id: ID!): Game
        reviews: [Review]
        review(id: ID!): Review
        authors: [Author]
        author(id: ID!): Author
    }
    type Mutation {
        addGame(game: AddGameInput!): Game
        deleteGame(id: ID!): [Game]
        updateGame(id: ID!, edits: EditGameInput): Game
    }
    input AddGameInput {
        title: String!,
        platform: [String!]!
    }
    input EditGameInput {
        title: String,
        platform: [String!]
    }
`;
