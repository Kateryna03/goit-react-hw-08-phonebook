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

// const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));

const contacts = createReducer(
  // localStorageContacts ??
  [
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  {
    [fetchContactSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => {
      const inContacts = [payload, ...state];
      // localStorage.setItem('contacts', JSON.stringify(inContacts));
      return inContacts;
    },

    [deleteContactSuccess]: (state, { payload }) => {
      const removedFromContacts = state.filter(({ id }) => id !== payload);
      // localStorage.setItem('contacts', JSON.stringify(removedFromContacts));
      return removedFromContacts;
    },
  },
);

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
export default combineReducers({ contacts, filter, loading });
