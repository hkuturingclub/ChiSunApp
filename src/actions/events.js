import { Firebase, FirebaseDB } from '../lib/firebase';

export const EVENTS_ERROR = 'EVENTS_ERROR';
export const EVENTS_REPLACE = 'EVENTS_REPLACE';

/**
 * Set an Error Message
 */
export function setError(message) {
  return dispatch => new Promise(resolve => resolve(
    dispatch({
      type: EVENTS_ERROR,
      data: message,
    }),
  ));
}

/**
 * Get Events
 */
export function getEvents() {
  if (Firebase === null) return () => new Promise(resolve => resolve());

  return dispatch => new Promise(resolve => FirebaseDB.collection('events')
    .get()
    .then((querySnapshot) => {
      const events = [];
      querySnapshot.forEach((doc) => {
        events.push({ id: doc.id, ...doc.data() });
      });
      return resolve(
        dispatch({
          type: EVENTS_REPLACE,
          data: events,
        }),
      );
    }).catch(e => console.log(e)));
}
