import { Firebase, FirebaseDB } from '../lib/firebase';

/**
 * Set an Error Message
 */
export function setError(message) {
  return dispatch => new Promise(resolve => resolve(
    dispatch({
      type: 'GROUPS_ERROR',
      data: message,
    }),
  ));
}

/**
 * Get Groups
 */
export function getGroups() {
  if (Firebase === null) return () => new Promise(resolve => resolve());

  return dispatch => new Promise(resolve => FirebaseDB.collection('groups')
    .get()
    .then((querySnapshot) => {
      const groups = [];
      querySnapshot.forEach((doc) => {
        groups.push({ id: doc.id, ...doc.data() });
      });
      return resolve(
        dispatch({
          type: 'GROUPS_REPLACE',
          data: groups,
        }),
      );
    })).catch(e => console.log(e));
}
