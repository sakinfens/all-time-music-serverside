const { gql } = require('apollo-server');

module.exports = gql`
  type Song {
    id: ID
    title: String!
    genre: String!
    artist: String!
    cover: String!
  }
  type Artist {
    id: ID!
    name: String!
    age: String!
  }
  type Query {
    getSongs: [Song]
    getSong(songId: ID!): Song
    getArtists: [Artist]
  }
  type Mutation {
    addSongs(title: String!, genre: String!, artist: String!, cover: String!): Song!
  }
`;
