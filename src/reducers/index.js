import status from './status';
import groups from './groups';
import eventCreate from './eventCreate';
import events from './events';

const rehydrated = (state = false, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return true;
    default:
      return state;
  }
};

export default {
  rehydrated,
  status,
  groups,
  eventCreate,
  events,
};
