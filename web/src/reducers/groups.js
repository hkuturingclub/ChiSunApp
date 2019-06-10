import { GROUPS_ERROR, GROUPS_REPLACE } from "../actions/groups";

export const initialState = {
  loading: true,
  error: null,
  groups: [
    {
      placeholder: true,
      id: 0,
      name: "---- --- -- ------",
      description:
        "---- --- -- ------ ---- --- -- ------ ---- --- -- ------ ---- --- -- ------",
      category: "----",
      image:
        "https://firebasestorage.googleapis.com/v0/b/react-native-starter-app.appspot.com/o/image-1.jpg?alt=media&token=9f7c839b-2d40-4660-a2a0-bf6c2f64a2e5",
      contact_name: "---- ----",
      contact_number: "-- ---- ----",
      link: "#"
    }
  ]
};

export default function groupReducer(state = initialState, action) {
  switch (action.type) {
    case GROUPS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.data
      };
    }
    case GROUPS_REPLACE: {
      let groups = [];

      // Pick out the props I need
      if (action.data && typeof action.data === "object") {
        groups = action.data.map(item => ({
          id: item.id,
          name: item.name,
          description: item.description,
          category: item.category,
          image: item.image,
          contact_name: item.contact_name,
          contact_number: item.contact_number,
          link: item.link
        }));
      }

      return {
        ...state,
        error: null,
        loading: false,
        groups
      };
    }
    default:
      return state;
  }
}
