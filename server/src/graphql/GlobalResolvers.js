import eventsResolvers from './events/EventResolvers';
import groupsResolvers from './groups/GroupResolvers';

const globalResolvers = {
  Query: {
    events: eventsResolvers.events,
    groups: groupsResolvers.groups,
  },
};

export default globalResolvers;
