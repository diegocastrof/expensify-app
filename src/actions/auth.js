import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogin = () => {
  return () => {
    firebase.auth().signInWithPopup(googleAuthProvider);
  }
};

export const startLogout = () => {
  return () => {
    firebase.auth().signOut();
  }
};

export const login = (user) => ({
  type: 'LOGIN',
  ...user
})

export const logout = () => ({
  type: 'LOGOUT'
})