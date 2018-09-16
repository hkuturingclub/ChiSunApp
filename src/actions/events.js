import request from 'superagent';

const CALENDAR_ID = '70rf5lu84bc511mqse2kgclfrc@group.calendar.google.com';
const API_KEY = 'AIzaSyBP-cJ5pPw0mdFneX5TyxTCjDvq7bucT9w';
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
const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;
export function getEvents() {
  return dispatch => new Promise(resolve => request
    .get(url)
    .then((res) => {
      const events = [];
      JSON.parse(res.text).items.forEach((event) => {
        events.push({
          id: event.id,
          start: event.start.date || event.start.dateTime,
          end: event.end.date || event.end.dateTime,
          title: event.summary,
          description: event.description,
          location: event.location,
        });
      });
      return resolve(
        dispatch({
          type: EVENTS_REPLACE,
          data: events,
        }),
      );
    })
    .catch(err => console.log(err)));
}
