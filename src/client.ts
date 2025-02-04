import { ApolloClient, InMemoryCache } from '@apollo/client';

const backedUrl = import.meta.env.VITE_SERVER_URL;

console.log(`Backend URL: ${backedUrl}`);

export const client = new ApolloClient({
  uri: backedUrl,
  cache: new InMemoryCache(),
});
