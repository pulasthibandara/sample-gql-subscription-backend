import { makeExecutableSchema } from 'graphql-tools';
import gql from 'graphql-tag';

const rootSchema: string[] = [
  gql`
    type Query {
      test: String
    }

    # type Mutations {}

    # type Subscriptions {}
  `,
];

const rootResolvers = {
  Query: {
    test() {
      return 'test val';
    },
  },
};

const typeDefs = [...rootSchema];
const resolvers = rootResolvers;

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
