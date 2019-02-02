import { FirebaseAuth } from "../lib/firebase";

export const FETCH_TODOS = "CREATE_USER_SUCCESS";
export const FETCH_USER = "FETCH_USER";

export const fetchUser = () => dispatch => {
    FirebaseAuth.onAuthStateChanged(user => {
      if (user) {
        dispatch({
          type: FETCH_USER,
          payload: user
        });
      } else {
        dispatch({
          type: FETCH_USER,
          payload: null
        });
      }
    });
  };

  export const signIn = (email, password) => dispatch => {
    FirebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(result => {})
      .catch(error => {
        console.log(error);
      });
  };
  
  export const signOut = () => dispatch => {
    FirebaseAuth
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch(error => {
        console.log(error);
      });
  };