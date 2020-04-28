const songResolvers = require('./SongsQueries');

module.exports = {
  Query: {
    ...songResolvers.Query
  },
  Mutation: {
    ...songResolvers.Mutation
  }
};
