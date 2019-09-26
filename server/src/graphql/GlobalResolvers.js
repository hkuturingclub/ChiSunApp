import eventsResolvers from './events/EventResolvers';
import groupsResolvers from './groups/GroupResolvers';
import managementResolvers from './management/ManagementResolvers';
import userResolvers from './user/UserResolvers';

const globalResolvers = {
  Query: {
    events: eventsResolvers.events,
    event: eventsResolvers.event,
    groups: groupsResolvers.groups,
    group: groupsResolvers.group,
    management: managementResolvers.managements,
    me: userResolvers.me,
  },
  Mutation: {
    login: userResolvers.login,
  },
};

export default globalResolvers;
