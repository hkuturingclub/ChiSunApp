import {
  EVENT_CREATE_ERROR,
  EVENT_CREATE_PROCESSING,
  EVENT_CREATE_RESET,
  EVENT_CREATE_SUCCESS,
} from "../actions/eventCreate";

export const initialState = {
  error: null,
  processing: false,
  createdEventId: "",
};

export default function eventCreateReducer(state = initialState, action) {
  switch (action.type) {
    case EVENT_CREATE_RESET: {
      return {
        ...state,
        error: null,
        processing: false,
        createdEventId: "",
      };
    }
    case EVENT_CREATE_PROCESSING: {
      return {
        ...state,
        error: null,
        processing: true,
        createdEventId: "",
      };
    }
    case EVENT_CREATE_ERROR: {
      return {
        ...state,
        error: action.data,
        processing: false,
        createdEventId: "",
      };
    }
    case EVENT_CREATE_SUCCESS: {
      return {
        ...state,
        error: null,
        processing: false,
        createdEventId: action.data,
      };
    }

    default:
      return state;
  }
}
