import { LOGIN, LOGOUT } from "./types";
import { firebase, googleAuthProvider } from "../firebase/firebase";

// export const login = (uid) => ({
//   type: LOGIN,
//   uid,
// });

// export const logout = () => ({
//   type: LOGOUT,
// });

// export const startLogin = () => async (dispatch) => dispatch(firebase.auth().signInWithPopup(googleAuthProvider)) 
// export const startLogout = () => async () => firebase.auth().signOut();

export const login = (uid) => ({
  type: LOGIN,
  uid
});

export const startLogin = () => {
  return () => {
  firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => ({
  type: LOGOUT
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

