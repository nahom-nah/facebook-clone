const commentResolver = require("./commentResolver");
const postResolver = require("./postResolver");
const userResolver = require("./userResolver");

module.exports = {
  Query: {
    ...userResolver.Query,
    ...postResolver.Query,
    ...commentResolver.Query,
  },
  Mutation: {
    ...userResolver.Mutation,
    ...postResolver.Mutation,
    ...commentResolver.Mutation,
  },
};
