import { firebase, googleAuthProvider } from "../firebase/firebase";

export const login = (uid) => ({
  type: "LOGIN",
  uid
});

export const logout = () => ({
  type: "LOGOUT",
});

export const startLogin = () => { // Not related to Redux store...
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
  };
};

export const startLogout = () => {
  return () => {
    firebase.auth().signOut();
  };
};