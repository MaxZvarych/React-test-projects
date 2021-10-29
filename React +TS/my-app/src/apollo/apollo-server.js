import { ApolloServer } from "apollo-server";
import typeDefs from "./Schema.js";
import resolvers from "./resolver.js";

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
