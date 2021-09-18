export const addContact = value => ({
  type: 'phonebook/AddContact',
  payload: value,
});

export const deleteContact = value => ({
  type: 'phonebook/DeleteContact',
  payload: value,
});

export const filterContact = value => ({
  type: 'phonebook/FilterContact',
  payload: value,
});
