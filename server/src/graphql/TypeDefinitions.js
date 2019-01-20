import { gql } from 'apollo-server';
import eventTypes from './events/EventTypes';
import groupTypes from './groups/GroupTypes';

const queryTypes = gql`
  type Query {
    events: [Event]
    groups: [Group]
  }
`;

const globalQuery = [queryTypes, eventTypes, groupTypes];

export default globalQuery;
