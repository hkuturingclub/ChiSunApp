import {
  CREATE_USER_FAIL,
  FETCH_USER,
  LOGIN_USER_FAIL,
  RESET_ERROR,
} from "../actions/user";

export const initialState = {
  error: null,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_ERROR: {
      return {
        ...state,
        error: null,
      };
    }
    case FETCH_USER: {
      return {
        ...state,
        user: action.data,
        error: null,
      };
    }
    case LOGIN_USER_FAIL: {
      return {
        ...state,
        error: action.data,
      };
    }
    case CREATE_USER_FAIL: {
      return {
        ...state,
        error: action.data,
      };
    }
    default: {
      return state;
    }
  }
};
