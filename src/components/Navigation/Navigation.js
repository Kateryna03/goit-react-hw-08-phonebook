import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { getisLoggedIn } from 'redux/auth/auth-selectors';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: 'white',
  },
  activeLink: {
    color: 'blue',
  },
};

const Navigation = () => {
  const isLoggedIn = useSelector(getisLoggedIn);
  return (
    <nav className={s.nav}>
      <NavLink exact to="/" style={styles.link} activeStyle={styles.activeLink}>
        StartPage
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
