import { Fragment } from 'react';
//import { useDispatch } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
//import { fetchContact, deleteContact } from 'redux/contacts/operations';
import './App.css';
import React from 'react';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import ContactsForm from 'components/ContactsForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import AppBar from 'components/AppBar/AppBar';
import { Switch } from 'react-router-dom';

import { getUser } from 'redux/auth/auth-operations';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

const StartPage = lazy(() => import('views/StartPage/StartPage'));
const RegisterView = lazy(() => import('views/Register/RegisterView'));
const LoginView = lazy(() => import('views/Login/Login'));
const Contacts = lazy(() => import('views/Contacts/Contacts'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getUser()), [dispatch]);
  return (
    <Fragment>
      <AppBar />

      <Switch>
        <Suspense fallback={<p>Loading...</p>}>
          <PublicRoute path="/" exact component={StartPage} />
          <PublicRoute restricted path="/register" component={RegisterView} />
          <PublicRoute restricted path="/login" component={LoginView} />
          <PrivateRoute path="/contacts">
            <Contacts />
          </PrivateRoute>
        </Suspense>
      </Switch>
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
