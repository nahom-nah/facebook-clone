const { ApolloServer, gql } = require("apollo-server");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "/.env") });

const typeDefs = gql`
  type Query {
    hello: String!
  }
`;
const resolvers = {
  Query: {
    hello: () => "hello world",
  },
};
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const port = process.env.PORT || 9000;
apolloServer.listen(port).then((res) => {
  console.log(`server is up and running at ${res.url}`);
});
