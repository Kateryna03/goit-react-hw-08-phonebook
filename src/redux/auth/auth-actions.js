import { createAction } from '@reduxjs/toolkit';

//register - 3 экшна, чтоб забрать
export const registerRequest = createAction('auth/registerRequest');
export const registerSuccess = createAction('auth/registerSuccess');
export const registerError = createAction('auth/registerError');

//login
export const logInRequest = createAction('auth/logInRequest');
export const logInSuccess = createAction('auth/logInSuccess');
export const logInError = createAction('auth/logInError');
//logout

export const logOutRequest = createAction('auth/logOutRequest');
export const logOutSuccess = createAction('auth/logOutSuccess');
export const logOutError = createAction('auth/logOutError');

//Current User

export const getUserRequest = createAction('auth/getUserRequest');
export const getUserSuccess = createAction('auth/getUserSuccess');
export const getUserError = createAction('auth/getUserError');
