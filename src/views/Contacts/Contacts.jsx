import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getError, getLoadind } from 'redux/contacts/selectors';
import { fetchContact } from 'redux/contacts/operations';
//import Container from 'components/Container/Container';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const barStyles = {
  // display: 'flex',
  // alignItems: 'flex-end',
  marginBottom: 20,
};

function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoadind);
  const ifError = useSelector(getError);
  console.log('ErrorSelector', ifError);

  useEffect(() => dispatch(fetchContact()), [dispatch]);

  return (
    <>
      <div style={barStyles}>
        <h1>Phonebook</h1>
        <ContactsForm />

        <h2>Contacts</h2>
        <Filter />
        {isLoading && <h1>Загружаем...</h1>}
        <ContactList />
        {ifError && alert(ifError)}
      </div>
    </>
  );
}
export default Contacts;
