import React, { Fragment } from 'react';

import './App.css';

import ContactsForm from '../components/ContactsForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';

function App() {
  return (
    <Fragment>
      <div>
        <h1>Phonebook</h1>
        <ContactsForm />

        <h2>Contacts</h2>
        <Filter />

        <ContactList />
      </div>
    </Fragment>
  );
}

// const mapStateToProps = state => {
//   return {
//     value: state.contacts.itemsValue,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     handleSubmit: () => dispatch(actions.addContact()),
//     handleRemoveContact: () => dispatch(actions.deleteContact()),
//     //onChangeFilter: () => dispatch(),
//     onFilterName: () => dispatch(actions.filterContact()),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
