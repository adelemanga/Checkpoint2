import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { dataSource } from "./config/db";
import CountryResolver from "./resolvers/countryResolver";

console.log("Hello Adele!");

// Start Apollo server
const start = async () => {
  await dataSource.initialize();
  const schema = await buildSchema({
    resolvers: [CountryResolver], 
  });

  const server = new ApolloServer({
    schema,
  });

    const { url } = await startStandaloneServer(server, {
      listen: { port: 4002 }, // Change le port ici
    });

  console.log(`🚀 Server ready at ${url}`);
};

start().catch((error) => {
  console.error("Error starting the server:", error);
});






 