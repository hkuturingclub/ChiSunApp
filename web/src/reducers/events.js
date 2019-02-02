import { EVENTS_ERROR, EVENTS_REPLACE } from '../actions/events';

export const initialState = {
  loading: true,
  error: null,
  events: [
    {
      placeholder: true,
      id: 0,
      name: '---- --- -- ------',
      description: '---- --- -- ------ ---- --- -- ------ ---- --- -- ------ ---- --- -- ------',
      image:
        'https://firebasestorage.googleapis.com/v0/b/react-native-starter-app.appspot.com/o/image-1.jpg?alt=media&token=9f7c839b-2d40-4660-a2a0-bf6c2f64a2e5',
      location: '---- ----',
      startDate: '2019-01-27T13:00:00.000Z'
    },
  ],
};

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case EVENTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.data,
      };
    }
    case EVENTS_REPLACE: {
      let events = [];

      // Pick out the props I need
      if (action.data && typeof action.data === 'object') {
        events = action.data.map(item => ({
          id: item.id,
          name: item.name,
          description: item.description,
          image: item.image,
          location: item.location,
          startDate: item.startDate,
          status: item.status
        }));
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
