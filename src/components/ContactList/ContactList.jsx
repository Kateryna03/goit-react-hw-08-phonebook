import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchContact, deleteContact } from 'redux/contacts/operations';
import {
  getLoadind,
  //getFilter,
  getNormolizedContacts,
} from 'redux/contacts/selectors';
//import { getContacts } from 'redux/contacts/selectors';
const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getNormolizedContacts);
  const loading = useSelector(getLoadind);
  console.log('!!!!!CONTACTS', contacts);
  //const filter = useSelector(getFilter);
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  useEffect(() => dispatch(fetchContact()), [dispatch]);

  return (
    <ul>
      {loading ? (
        <h1>LOADING...</h1>
      ) : (
        contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button type="button" onClick={() => onDeleteContact(id)}>
              delete contact
            </button>
          </li>
        ))
      )}
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
export default ContactList;
// const mapDispatchToProps = dispatch => ({
//   fetchContactsBD: () => dispatch(fetchContact),
// });

// export default connect(null, mapDispatchToProps)(ContactList);
