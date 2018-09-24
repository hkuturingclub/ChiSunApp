import { STATUS_REPLACE } from '../actions/status';
import Store from '../store/status';

export const initialState = Store;

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case STATUS_REPLACE: {
      return {
        ...state,
        loading: action.loading || false,
        info: action.info || null,
        error: action.error || null,
        success: action.success || null,
      };
    }
    default:
      return state;
  }
}
