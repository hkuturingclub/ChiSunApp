import { Firebase, FirebaseAuth } from "../lib/firebase";

export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAIL = "CREATE_USER_FAIL";


export function createUser(email,pass){
  return async dispatch => {
    if (Firebase === null){
      dispatch(createUserFail("Server Error"));
      return;
    } 
    try {
      const response = await FirebaseAuth.createUserWithEmailAndPassword(email, pass); 
      dispatch(createUserSuccess(response));
    }
    catch(error){
      dispatch(createUserFail(error.message)); 
    }
  }
} 

export const createUserSuccess = (response) => {
  return {
    type: CREATE_USER_SUCCESS,
    data: response,
  }
};

export const createUserFail = (error) => {
  return {
    type: CREATE_USER_FAIL,
    data: error
  }
};


