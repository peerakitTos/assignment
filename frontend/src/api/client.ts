import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:3000/graphql?",
  cache: new InMemoryCache({ addTypename: false }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "network-only",
      errorPolicy: "all",
    },
  },
});
