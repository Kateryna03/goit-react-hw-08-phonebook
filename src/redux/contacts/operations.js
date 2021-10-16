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
} from '../contacts/actions';

//axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
//http://localhost:3030';
// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },

//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

const fetchContact = () => async (dispatch, getState) => {
  dispatch(fetchContactRequest());

  // token.set(getState().auth.token);
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error.message));
    alert(error.message);
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
    alert(error.message);
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
    alert(error.message);
  }

  //   axios
  //     .delete(`/contacts/${contactId}`)
  //     .then(() => dispatch(deleteContactSuccess(contactId)))
  //     .catch(error => dispatch(deleteContactError(error)));
};

// const deleteContact = createAction('contacts/DeleteContact');
// const filterContacts = createAction('contacts/FilterContact');

export { addContact, deleteContact, fetchContact };
