// //import { createAction } from '@reduxjs/toolkit';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { registerError } from './auth-actions';

// // import {
// //   addContactRequest,
// //   addContactSuccess,
// //   addContactError,
// //   deleteContactRequest,
// //   deleteContactSuccess,
// //   deleteContactError,
// //   fetchContactRequest,
// //   fetchContactSuccess,
// //   fetchContactError,
// // } from './actions';

// // 'https://connections-api.herokuapp.com;';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com;';

// // const fetchContact = () => async dispatch => {
// //   dispatch(fetchContactRequest());
// //   try {
// //     const { data } = await axios.get('/contacts');
// //     dispatch(fetchContactSuccess(data));
// //   } catch (error) {
// //     dispatch(fetchContactError(error.message));

// export { register, logIn, logOut };
import axios from 'axios';
import {
  registerRequest,
  registerSuccess,
  registerError,
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

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

//registration
const register = credentials => async dispatch => {
  dispatch(registerRequest());
  try {
    const { data } = await axios.post('/users/signup', credentials);
    console.log('####register DATA', data);
    token.set(data.token);
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};
// const register = createAsyncThunk('auth/register', async credentials => {
//   try {
//     const { data } = await axios.post('/users/signup', credentials);
//     return data;
//   } catch (error) {
//     //dispatch(registerError(error));
//     console.log(error.message);
//   }
// });

const login = credentials => async dispatch => {
  dispatch(logInRequest());
  try {
    const { data } = await axios.post('/users/login', credentials);
    console.log('####Login DATA', data);
    token.set(data.token); //обязательно сохраняем токен ктр автоматом после сохранения будет при любом запросе
    dispatch(logInSuccess(data));
  } catch (error) {
    dispatch(logInError(error.message));
  }
};
// const logIn = createAsyncThunk('auth/register', async credentials => {
//   try {
//     const { data } = await axios.post('/users/login', credentials);
//     return data;
//   } catch (error) {
//     console.log(error.message);
//   }
// });
const logout = credentials => async dispatch => {
  dispatch(logOutRequest());
  try {
    const { data } = await axios.post('/users/logout', credentials);
    console.log('####Login DATA', data);
    console.log('###Credentials', credentials);
    token.unset(data.token); //снимаем токен с загаловка
    dispatch(logOutSuccess(data));
  } catch (error) {
    dispatch(logOutError(error.message));
  }
};
// const logOut = createAsyncThunk('auth/register', async credentials => {
//   try {
//     const { data } = await axios.post('/users/logout', credentials);
//     return data;
//   } catch (error) {
//     console.log(error.message);
//   }
// });
const getUser = () => async (dispatch, getState) => {
  // console.log('getStateTOKEN:', getState(token));
  // auth:
  // isLoggedIn: true
  // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY1NWEzZjdiYjg0YjAwMTUyZDY4MjgiLCJpYXQiOjE2MzQwNzEzMjh9.gaJJbnd-VmRCCmPchBGA8oi1JO6eGdOoshYePLgDtKk"
  // user: {name: 'Okeksii', email: 'oleksii@gmail.com'}

  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) return;

  token.set(persistedToken);

  dispatch(getUserRequest());

  try {
    const { data } = await axios.get('/users/current');

    dispatch(getUserSuccess(data));
  } catch (error) {
    dispatch(getUserError(error.message));
  }
};
// const fetchCurrentUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       console.log('Токена нет, уходим из fetchCurrentUser');
//       return thunkAPI.rejectWithValue();
//     }

//     token.set(persistedToken);
//     try {
//       const { data } = await axios.get('/users/current');
//       return data;
//     } catch (error) {
//       // TODO: Добавить обработку ошибки error.message
//     }
//   },
// );

export { register, login, logout, getUser };
