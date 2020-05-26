import { ApolloClient, InMemoryCache } from '@apollo/client';
import typeDefs from './schema.client.graphql';
import { resolvers as products } from './resolvers/products';

const cache = new InMemoryCache();

export const client = new ApolloClient({
  cache,
  typeDefs,
  resolvers: {
    Query: {
      ...products.Query,
    },
  },
});
