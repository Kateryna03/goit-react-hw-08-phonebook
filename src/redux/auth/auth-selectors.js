export const getisLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user.name;
export const getRefreshingUser = state => state.auth.refreshingUser;

// const authSelectors = {
//   getisLoggedIn,
//   getUserName,
// };

// export default authSelectors;

// //композитный(составной)селектор - переношу логику из контактЛист- мемоизирую селектор
// export const getNormolizedContacts = createSelector(
//   [getContacts, getFilter],
//   (contacts, filter) => {
//     //если контактс и фильтр не изменились - перерендер не выполняется а берется последний - глубина кэша 1
//     const normolizedContactsFilter = filter.toLowerCase();
//     return contacts.filter(contact => {
//       return contact.name.toLowerCase().includes(normolizedContactsFilter);
//     });
//   },
// );
