import status from './status';
import groups from './groups';
<<<<<<< HEAD
import eventCreate from './eventCreate';
=======
>>>>>>> 2ae2e9e... mobile-app: displays upcoming events
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
<<<<<<< HEAD
  eventCreate,
=======
>>>>>>> 2ae2e9e... mobile-app: displays upcoming events
  events,
};
