import { makeExecutableSchema } from 'graphql-tools';
import gql from 'graphql-tag';
import { merge } from 'lodash';

import { userSchema, userResolvers } from './user/schema';

const rootSchema: string[] = [
  gql`
    type Query {
      user: User
    }

    # type Mutations {}

    # type Subscriptions {}
  `,
];

const rootResolvers = {
  Query: {
    user() {
      return { id: '12345', email: 'test@email.com' };
    },
  },
};

const typeDefs = [...rootSchema, ...userSchema];
const resolvers = merge(rootResolvers, userResolvers);

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
