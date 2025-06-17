import { createSchema, createYoga } from 'graphql-yoga';
import { createServer } from 'node:http';
import initialProducts from '../mock-data/items.json';

const typeDefs = /* GraphQL */ `
  type Query {
    categories: [String!]!
  }
`;

const resolvers = {
  Query: {
    categories: () => initialProducts.data,
  },
};

const yoga = createYoga({
  schema: createSchema({ typeDefs, resolvers }),
  graphqlEndpoint: '/graphql',
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.log('🚀 GraphQL server ready at http://localhost:4000/graphql');
});
