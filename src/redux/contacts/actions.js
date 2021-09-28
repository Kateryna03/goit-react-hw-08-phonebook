import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

// export const addContact = ({ name, number, id }) => ({
//   type: 'phonebook/AddContact',
//   payload: { name, number, id },
// });

// export const deleteContact = id => ({
//   type: 'phonebook/DeleteContact',
//   payload: { id },
// });

// export const filterContact = name => ({
//   type: 'phonebook/FilterContact',
//   payload: { name },
// });

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
