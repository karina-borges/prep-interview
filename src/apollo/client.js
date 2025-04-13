import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
  cache: new InMemoryCache(),
});

export default client;
// This file sets up an Apollo Client instance to interact with a GraphQL API.
// The client is configured with a URI and an in-memory cache for efficient data management.
// The URI points to the GraphQL endpoint, and the cache is used to store query results.
// The Apollo Client is then exported for use in other parts of the application.
// The client can be used to send queries and mutations to the GraphQL server,
// and it will handle caching and updating the UI with the results.
