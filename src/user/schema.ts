import { makeExecutableSchema } from 'graphql-tools';
import gql from 'graphql-tag';

export const userSchema: string[] = [
  gql`
    type User {
      id: String,
      email: String,
    }

    input AddUser {
      email: String,
      password: String,
    }
  `,
];

export const userResolvers = {
  
};
