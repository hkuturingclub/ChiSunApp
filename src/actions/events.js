<<<<<<< HEAD
// import request from 'superagent';

// const CALENDAR_ID = '70rf5lu84bc511mqse2kgclfrc@group.calendar.google.com';
// const API_KEY = 'AIzaSyBP-cJ5pPw0mdFneX5TyxTCjDvq7bucT9w';
// export const EVENTS_ERROR = 'EVENTS_ERROR';
// export const EVENTS_REPLACE = 'EVENTS_REPLACE';
// /**
//  * Set an Error Message
//  */
// export function setError(message) {
//   return dispatch => new Promise(resolve => resolve(
//     dispatch({
//       type: EVENTS_ERROR,
//       data: message,
//     }),
//   ));
// }
// /**
//  * Get Events
//  */
// const currDate = encodeURIComponent((new Date()).toISOString())
// const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&timeMin=${currDate}`;
// export function getEvents() {
//   return dispatch => new Promise(resolve => request
//     .get(url)
//     .then((res) => {
//       const events = [];
//       JSON.parse(res.text).items.forEach((event) => {
//         events.push({
//           id: event.id,
//           start: event.start.date || event.start.dateTime,
//           end: event.end.date || event.end.dateTime,
//           title: event.summary,
//           description: event.description,
//           location: event.location,
//           image: event.attachments[0].fileId,
//         });
//       });
//       return resolve(
//         dispatch({
//           type: EVENTS_REPLACE,
//           data: events,
//         }),
//       );
//     })
//     .catch(err => console.log(err)));
// }

import { Firebase, FirebaseDB } from '../lib/firebase';
=======
import request from 'superagent';

const CALENDAR_ID = '70rf5lu84bc511mqse2kgclfrc@group.calendar.google.com';
const API_KEY = 'AIzaSyBP-cJ5pPw0mdFneX5TyxTCjDvq7bucT9w';
>>>>>>> 2ae2e9e... mobile-app: displays upcoming events
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
<<<<<<< HEAD
// const currDate = encodeURIComponent((new Date()).toISOString())
export function getEvents() {
  if (Firebase === null) return () => new Promise(resolve => resolve());

  return dispatch => new Promise(resolve => FirebaseDB.collection('events')
    .get()
    .then((querySnapshot) => {
      const events = [];
      querySnapshot.forEach((doc) => {
        events.push({ id: doc.id, ...doc.data() });
=======
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
>>>>>>> 2ae2e9e... mobile-app: displays upcoming events
      });
      return resolve(
        dispatch({
          type: EVENTS_REPLACE,
          data: events,
        }),
      );
<<<<<<< HEAD
    })).catch(e => console.log(e));
}



=======
    })
    .catch(err => console.log(err)));
}
>>>>>>> 2ae2e9e... mobile-app: displays upcoming events
