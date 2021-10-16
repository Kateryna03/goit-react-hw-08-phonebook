export const getisLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user.name;
export const getRefreshingUser = state => state.auth.refreshingUser;
export const getAuthError = state => state.auth.error;

// const authSelectors = {
//   getisLoggedIn,
//   getUserName,
// };

// export default authSelectors;
