import { createSelector } from '@reduxjs/toolkit';

export const getLoadind = state => state.loading;
export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;

//композитный(составной)селектор - переношу логику из контактЛист
export const getNormolizedContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normolizedContactsFilter = filter.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normolizedContactsFilter);
    });
  },
);
// const filteredContacts = (contacts, filter) =>
//   contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase()),
//   );

// const finishFilterContacts = filteredContacts(contacts, filter);

//console.log('ОТФИЛЬТРОВАННЫЕ КОНТАКТЫ', finishFilterContacts);
