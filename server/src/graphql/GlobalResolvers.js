import eventsResolvers from './events/EventResolvers';
import groupsResolvers from './groups/GroupResolvers';
import managementResolvers from './management/ManagementResolvers';

const globalResolvers = {
  Query: {
    events: eventsResolvers.events,
    event: eventsResolvers.event,
    groups: groupsResolvers.groups,
    group: groupsResolvers.group,
    management: managementResolvers.managements,
  },
  Mutation: {
    createEvent: eventsResolvers.createEvent
  }
};

export default globalResolvers;
