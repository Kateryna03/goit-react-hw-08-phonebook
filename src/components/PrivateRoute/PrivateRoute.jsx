import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getisLoggedIn } from 'redux/auth/auth-selectors';

const PrivateRoute = ({ children, ...rest }) => {
  const isLoggedIn = useSelector(getisLoggedIn);
  console.log('isLOGGEDiN', isLoggedIn);
  return (
    <Route {...rest}>
      {isLoggedIn ? children : <Redirect to="/login" />}

      {/* render={props => */}
      {/* //   localStorage.getItem('idToken') ? (
      //     <Component {...props} />
      //   ) : (
      //     <Redirect to="/" />
      //   )
      // } */}
    </Route>
  );
};

export default PrivateRoute;
