const { ApolloServer } = require("apollo-server-express");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const dotenv = require("dotenv");
const path = require("path");
const typeDefs = require("./graphql/typeDefs");
const express = require("express");
const resolvers = require("./graphql/resolvers");

const redis = require("redis");
const session = require("express-session");
const cors = require("cors");
let RedisStore = require("connect-redis")(session);
let redisClient = redis.createClient();

async function main() {
  const app = express();

  dotenv.config({ path: path.join(__dirname, "/.env") });
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
  app.use(
    session({
      store: new RedisStore({ client: redisClient }),
      name: "qid",
      cookie: {
        sameSite: "lax",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24,
      },
      saveUninitialized: false,
      secret: process.env.SECRET,
      resave: false,
    })
  );
  require("./config/database");

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    context: ({ req, res }) => ({ req, res }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, cors: false });
  const port = process.env.PORT || 9000;

  app.listen(port, () => {
    console.log(`server is up and running ...`);
  });
}

main().catch((err) => {
  console.error(err);
});
