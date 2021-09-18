import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button type="button" onClick={() => deleteContact(id)}>
            delete contact
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
export default connect()(ContactList);
