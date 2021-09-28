// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/reducer';

// const store = createStore(
//   reducer,
//   composeWithDevTools(),
// applyMiddleware([])
// other store enhancers if any
// );
const store = configureStore({ reducer: contactsReducer });

export default store;
