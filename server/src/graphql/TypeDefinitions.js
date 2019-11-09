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
  }
  type Mutation {
    createEvent(data: CreateEventInput!): Event!
  }
  input CreateEventInput {
    name: String!
    description: String!
    location: String!
    startDate: String!
  }
`;

const globalQuery = [queryTypes, eventTypes, groupTypes, managementTypes];

export default globalQuery;
