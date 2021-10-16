import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactSuccess,
  addContactError,
  addContactRequest,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterContacts,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from '../contacts/actions';

const contacts = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => {
    const inContacts = [payload, ...state];
    return inContacts;
  },

  [deleteContactSuccess]: (state, { payload }) => {
    const removedFromContacts = state.filter(({ id }) => id !== payload);
    return removedFromContacts;
  },
});

const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(null, {
  [fetchContactError]: (_, { payload }) => payload,
  [addContactError]: (_, { payload }) => payload,
  [deleteContactError]: (_, { payload }) => payload,
});
export default combineReducers({ contacts, filter, loading, error });
