import eventsResolvers from './events/EventResolvers';
import groupsResolvers from './groups/GroupResolvers';

const globalResolvers = {
  Query: {
    events: eventsResolvers.events,
    event: eventsResolvers.event,
    groups: groupsResolvers.groups,
    group: groupsResolvers.group,
  },
};

export default globalResolvers;
