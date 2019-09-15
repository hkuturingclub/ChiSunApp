import { Firebase, FirebaseDB } from '../lib/firebase';

export const EVENTS_ERROR = 'EVENTS_ERROR';
export const EVENTS_REPLACE = 'EVENTS_REPLACE';
export const EVENT_UPDATE_STATUS = 'EVENT_UPDATE_STATUS';
export const EVENT_UPDATE_PROCESSING = 'EVENT_UPDATE_PROCESSING';
export const EVENT_UPDATE_ERROR = 'EVENT_UPDATE_ERROR';

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

export function updateEventStatus(eventId,status) {
  return async dispatch => {
    if(Firebase === null) {
      return;
    }
    dispatch({
      type:EVENT_UPDATE_PROCESSING
    });
    try{
      let eventRef = FirebaseDB.collection('events').doc(eventId);
      await eventRef.update({status:status});
      await eventRef.get().then(doc=> {
        const event = doc.data();
        event['id'] = doc.id;
        dispatch({
          type:EVENT_UPDATE_STATUS,
          data: event,
        })
      });
    }catch(e){
      console.log(e)
      dispatch({
        type:EVENT_UPDATE_ERROR,
        data:{
          error: e.message,
          id: eventId,
        },
      })
    }
  }
}

