import { Firebase, FirebaseDB, FirebaseStorage } from "../lib/firebase";
import { generateGUID } from "../lib/util.js";

export const GROUP_CREATE_RESET = "GROUP_CREATE_RESET";
export const GROUP_CREATE_PROCESSING = "GROUP_CREATE_PROCESSING";
export const GROUP_CREATE_ERROR = "GROUP_CREATE_ERROR";
export const GROUP_CREATE_SUCCESS = "GROUP_CREATE_SUCCESS";

/**
 * Resets state
 */
export function reset() {
  return (dispatch) =>
    new Promise((resolve) =>
      resolve(
        dispatch({
          type: GROUP_CREATE_RESET,
        })
      )
    );
}

/**
 * Add Group
 */
export function addGroup(groupDetails, groupID = generateGUID()) {
  return async (dispatch) => {
    if (Firebase === null) {
      return;
    }

    dispatch({
      type: GROUP_CREATE_PROCESSING,
    });

    try {
      const groupsRef = FirebaseStorage.ref().child("groups");
      let imageURL = "";
      if (groupDetails.image instanceof File) {
        const snapshot = await groupsRef
          .child(generateGUID())
          .put(groupDetails.image);
        imageURL = await snapshot.ref.getDownloadURL();
      } else {
        imageURL = groupDetails.image;
      }
      await FirebaseDB.collection("groups").doc(groupID).set({
        name: groupDetails.name,
        description: groupDetails.description,
        category: groupDetails.category,
        contact_name: groupDetails.contact_name,
        contact_number: groupDetails.contact_number,
        link: groupDetails.link,
        image: imageURL,
      });
      dispatch({
        type: GROUP_CREATE_SUCCESS,
        data: groupID,
      });
    } catch (error) {
      dispatch({ type: GROUP_CREATE_ERROR, data: error.message });
    }
  };
}
