import Store from '../store/events';
import { EVENTS_ERROR, EVENTS_REPLACE } from '../actions/events';

export const initialState = Store;
export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case EVENTS_ERROR: {
      return {
        ...state,
        error: action.data,
      };
    }
    case EVENTS_REPLACE: {
      let events = [];
      // Pick out the props I need
      if (action.data && typeof action.data === 'object') {
<<<<<<< HEAD
        events = action.data.map(item => ({
          id: item.id,
          start: item.startDate.date || item.startDate.dateTime,
          title: item.name,
          description: item.description,
          location: item.location,
          image: item.image,
        }));
=======
        events = action.data;
>>>>>>> 2ae2e9e... mobile-app: displays upcoming events
      }
      return {
        ...state,
        error: null,
        loading: false,
        events,
      };
    }
    default:
      return state;
  }
}
