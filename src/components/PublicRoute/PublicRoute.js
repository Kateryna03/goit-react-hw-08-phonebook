import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getisLoggedIn } from 'redux/auth/auth-selectors';

const PublicRoute = ({ children, restricted = false, ...rest }) => {
  const isLoggedIn = useSelector(getisLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...rest}>
      {shouldRedirect ? <Redirect to="/contacts" /> : children}
    </Route>
  );
};

export default PublicRoute;
