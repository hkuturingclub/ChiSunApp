import {
  GROUP_CREATE_ERROR,
  GROUP_CREATE_PROCESSING,
  GROUP_CREATE_RESET,
  GROUP_CREATE_SUCCESS
} from "../actions/groupCreate";

export const initialState = {
  error: null,
  processing: false,
  groupId: ""
};

export default function groupCreateReducer(state = initialState, action) {
  switch (action.type) {
    case GROUP_CREATE_RESET: {
      return {
        ...state,
        error: null,
        processing: false,
        groupId: ""
      };
    }
    case GROUP_CREATE_PROCESSING: {
      return {
        ...state,
        error: null,
        processing: true,
        groupId: ""
      };
    }
    case GROUP_CREATE_ERROR: {
      return {
        ...state,
        error: action.data,
        processing: false,
        groupId: ""
      };
    }
    case GROUP_CREATE_SUCCESS: {
      return {
        ...state,
        error: null,
        processing: false,
        groupId: action.data
      };
    }
    default:
      return state;
  }
}
