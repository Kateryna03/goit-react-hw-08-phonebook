import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
const contacts = {
  items: [],
  filter: '',
};

const reducer = (state = contacts, action) => {
  switch (action.type) {
    case 'phonebook/AddContact':
      return { items: state.items + action.payload };

    case 'phonebook/DeleteContact':
      return { items: state.items - action.payload };

    case 'phonebook/FilterContact':
      return { filter: action.payload };

    default:
      return state;
  }
};

const store = createStore(
  reducer,
  composeWithDevTools(),
  // applyMiddleware([])
  // other store enhancers if any
);

export default store;
