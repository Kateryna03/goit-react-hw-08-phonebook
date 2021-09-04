import React, { Component, Fragment } from 'react';
import shortid from 'shortid';
import './App.css';

import ContactsForm from '../components/ContactsForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // name: '',
    // number: '',
  };
  //один раз
  componentDidMount() {
    //localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    const localContacts = localStorage.getItem('contacts');
    console.log(localContacts);
    const parsedContacts = JSON.parse(localContacts);
    console.log(parsedContacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  //при каждом обновлении пропсов или стейта
  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.contacts);
    console.log(prevState.contacts);
    if (this.state.contacts !== prevState.contacts) {
      console.log('ОБНОВИЛОСЬ');
      //setState только после условия - иначе зациклится
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleSubmit = (name, number) => {
    console.log(this.state.contacts);
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    const { contacts } = this.state;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
      )
    ) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    console.log(contacts);
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  handleRemoveContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  onFilterName = () => {
    const { filter, contacts } = this.state;
    const normolizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normolizedFilter),
    );
  };

  render() {
    const contactsResults = this.onFilterName();
    return (
      <Fragment>
        <div>
          <h1>Phonebook</h1>
          <ContactsForm onSubmit={this.handleSubmit} />

          <h2>Contacts</h2>
          <Filter
            value={this.state.filter}
            onChangeFilter={this.onChangeFilter}
          />

          <ContactList
            contacts={contactsResults}
            handleDeleteContact={this.handleRemoveContact}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
