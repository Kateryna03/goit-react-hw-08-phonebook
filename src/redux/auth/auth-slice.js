// import { register, logIn, logOut } from '../auth/auth-operations';
// import { createSlice } from '@reduxjs/toolkit';

// // const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));

// const initialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {
//     [register.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [logIn.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [logOut.fulfilled](state, action) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//     },
//     // [authOperations.fetchCurrentUser.fulfilled](state, action) {
//     //   state.user = action.payload;
//     //   state.isLoggedIn = true;
//     // },
//   },
// });

// export default authSlice.reducer;
///////////////////////////////////////////////////////////////////////////
//import { combineReducers } from 'redux';
import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  registerSuccess,
  registerError,
  registerRequest,
  logInRequest,
  logInSuccess,
  logInError,
  logOutRequest,
  logOutSuccess,
  logOutError,
  getUserRequest,
  getUserSuccess,
  getUserError,
} from '../auth/auth-actions';

// const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));
const initialUserState = {
  name: '',
  email: '',
  // token: null,
  // isLoggedIn: false,
};
//авторизация - вход - выход
const user = createReducer(
  initialUserState,

  {
    [registerSuccess]: (_, { payload }) => payload.user,
    [logInSuccess]: (_, { payload }) => payload.user,
    [logOutSuccess]: () => initialUserState, //сбрасывем в исходное состояние
    [getUserSuccess]: (_, { payload }) => payload,
  },
);
//авторизация
const isLoggedIn = createReducer(false, {
  //[registerRequest]: () => true,
  [registerSuccess]: () => true,
  [registerError]: () => false,

  //[logInRequest]: () => true,
  [logInSuccess]: () => true,
  [logInError]: () => false,

  //[getUserRequest]: () => true,
  [getUserSuccess]: () => true,
  [getUserError]: () => false,

  [logOutRequest]: () => false,
  //[logOutSuccess]: () => false,
  //[logOutError]: () => false,
});

const token = createReducer(
  null,

  {
    [registerSuccess]: (_, { payload }) => payload.token,
    [logInSuccess]: (_, { payload }) => payload.token,
    [logOutSuccess]: () => null,
    [getUserSuccess]: (_, { payload }) => payload.token,
  },
);
export default combineReducers({
  user,
  isLoggedIn,
  token,
});
