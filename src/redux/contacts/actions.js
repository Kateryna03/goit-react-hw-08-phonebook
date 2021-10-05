import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('contacts/AddContact', (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));
const deleteContact = createAction('contacts/DeleteContact');
const filterContacts = createAction('contacts/FilterContact');

export { addContact, deleteContact, filterContacts };
