import {
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS,} from "../actions/signUp";


export const initialState = {
  error: null,
  processing: false,
  loggedIn: false,
  uid: '', 
};

export default function createUser(state = initialState, action) {
  switch (action.type) {

    case CREATE_USER_FAIL: {
      return {
        ...state,
        error: action.data,
        processing: false,
        uid:'', 
        loggedIn: false,
      };
    }
    case CREATE_USER_SUCCESS: {
      return {
        ...state,
        error: null,
        processing: false,
        loggedIn: true,
        uid: action.data.user.uid,  
      };
    }

    default:
      return state;
  }
}
