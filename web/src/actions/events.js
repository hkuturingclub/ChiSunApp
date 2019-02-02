import { Firebase, FirebaseDB } from '../lib/firebase';

export const EVENTS_ERROR = 'EVENTS_ERROR';
export const EVENTS_REPLACE = 'EVENTS_REPLACE';

/**
 * Get Events
 */
export function getEvents() {
  return async dispatch => {
    if (Firebase === null) {
      dispatch({ type: EVENTS_ERROR, data: "Server error" });
      return;
    }

    try {
      const response = await FirebaseDB.collection('events').get();
      const events = [];
      response.forEach(doc => {
        const data = doc.data();
        events.push({ id: doc.id, ...data});
      });
      events.sort((a, b) => Date.parse(a.startDate) - Date.parse(b.startDate));
      dispatch({ type: EVENTS_REPLACE, data: events });
    } catch (error) {
      dispatch({ type: EVENTS_REPLACE, data: error.message });
    }
  }
}
