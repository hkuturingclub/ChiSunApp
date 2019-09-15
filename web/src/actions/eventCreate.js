import { Firebase, FirebaseDB, FirebaseStorage } from '../lib/firebase';
import { PROCESSING } from '../constants/events';
import { generateGUID } from '../lib/util.js';

export const EVENT_CREATE_RESET = 'EVENT_CREATE_RESET';
export const EVENT_CREATE_PROCESSING = 'EVENT_CREATE_PROCESSING';
export const EVENT_CREATE_ERROR = 'EVENT_CREATE_ERROR';
export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS';


/**
 * Resets state
 */
export function reset() {
  return dispatch => new Promise(resolve => resolve(
    dispatch({
      type: EVENT_CREATE_RESET,
    }),
  ));
}

/**
 * Add Event
 */
export function addEvent(eventDetails) {
  if (Firebase === null) return () => new Promise(resolve => resolve());

  // Store image in events folder
  const eventsRef = FirebaseStorage.ref().child('events');

  return dispatch => new Promise((resolve) => {
    // Show processing on event creation page
    dispatch({
      type: EVENT_CREATE_PROCESSING,
    });

    // 1. Upload event image
    eventsRef
    // Generate a random file name and store it with that name
      .child(generateGUID())
    // Upload the image
      .put(eventDetails.image)
    // Get public image URL to store in database for event
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then((url) => {
        // 2. Create event in database
        FirebaseDB.collection('events')
          .add({
            name: eventDetails.name,
            description: eventDetails.description,
            location: eventDetails.location,
            startDate: eventDetails.startDate,
            image: url,
            status: PROCESSING, 
          })
        // Show success on event creation page along with document id
          .then((snapshot) => {
            resolve(
              dispatch({
                type: EVENT_CREATE_SUCCESS,
                data: snapshot.id,
              }),
            );
          })
        // Show error on event creation page with error message
          .catch((e) => {
            dispatch({
              type: EVENT_CREATE_ERROR,
              data: e.message,
            });
          });
      })
    // Show error on event creation page with error message
      .catch((e) => {
        dispatch({
          type: EVENT_CREATE_ERROR,
          data: e.message,
        });
      });
  });
}

