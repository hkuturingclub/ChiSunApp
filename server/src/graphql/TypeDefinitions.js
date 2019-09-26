import { gql } from 'apollo-server';
import eventTypes from './events/EventTypes';
import groupTypes from './groups/GroupTypes';
import managementTypes from './management/ManagementTypes';

const queryTypes = gql`
  type Query {
    events: [Event!]!
    event(id: ID!): Event!
    groups: [Group!]!
    group(id: ID!): Group!
    management: [Management!]!
    me: User!
  }
  type Mutation {
    login(email: String!, password: String!): String!
  }

  type User {
    email: String!
  }
`;

const globalQuery = [queryTypes, eventTypes, groupTypes, managementTypes];

export default globalQuery;
