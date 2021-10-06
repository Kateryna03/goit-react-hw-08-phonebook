//import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from './actions';

axios.defaults.baseURL = 'http://localhost:3030';

const fetchContact = () => async dispatch => {
  dispatch(fetchContactRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error.message));
  }
  //синхрон
  //   axios
  //     .get('/contacts')
  //     .then(({ data }) => dispatch(fetchContactSuccess(data)))
  //     .catch(error => dispatch(fetchContactError(error.message)));
};

const addContact = (name, number) => async dispatch => {
  const contact = {
    name,
    number,
    //completed: false,
  };

  dispatch(addContactRequest());
  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }

  //   axios
  //     .post('/contacts', contact)
  //     .then(({ data }) => dispatch(addContactSuccess(data)))
  //     .catch(error => dispatch(addContactError(error)));
};

const deleteContact = contactId => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactError(error));
  }

  //   axios
  //     .delete(`/contacts/${contactId}`)
  //     .then(() => dispatch(deleteContactSuccess(contactId)))
  //     .catch(error => dispatch(deleteContactError(error)));
};

// const deleteContact = createAction('contacts/DeleteContact');
// const filterContacts = createAction('contacts/FilterContact');

export { addContact, deleteContact, fetchContact };
