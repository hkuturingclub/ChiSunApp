import { Firebase, FirebaseDB } from '../lib/firebase';

export const GROUPS_ERROR = 'GROUPS_ERROR';
export const GROUPS_REPLACE = 'GROUPS_REPLACE';

/**
 * Get Groups
 */
export function getGroups() {
  return async dispatch => {
    if (Firebase === null) {
      dispatch({ type: GROUPS_ERROR, data: "Server error" });
      return;
    }

    try {
      const response = await FirebaseDB.collection('groups').get();
      const groups = [];
      response.forEach(doc => {
        groups.push({ id: doc.id, ...doc.data()});
      });
      dispatch({ type: GROUPS_REPLACE, data: groups });
    } catch (error) {
      dispatch({ type: GROUPS_ERROR, data: error.message });
    }
  }
}
