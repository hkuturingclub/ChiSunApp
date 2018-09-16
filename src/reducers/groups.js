import Store from '../store/groups';

export const initialState = Store;

export default function groupReducer(state = initialState, action) {
  switch (action.type) {
    case 'GROUPS_ERROR': {
      return {
        ...state,
        error: action.data,
      };
    }
    case 'GROUPS_REPLACE': {
      let groups = [];

      // Pick out the props I need
      if (action.data && typeof action.data === 'object') {
        groups = action.data.map(item => ({
          id: item.id,
          name: item.name,
          description: item.description,
          category: item.category,
          image: item.image,
          contactName: item.contact_name,
          contactNumber: item.contact_number,
          link: item.link,
        }));
      }

      return {
        ...state,
        error: null,
        loading: false,
        groups,
      };
    }
    default:
      return state;
  }
}
