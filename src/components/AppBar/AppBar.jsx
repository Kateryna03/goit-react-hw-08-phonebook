import { useSelector } from 'react-redux';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import Navigation from '../Navigation/Navigation';
import styles from './AppBar.module.css';
import { getisLoggedIn } from 'redux/auth/auth-selectors';

export default function AppBar() {
  const isLoggedIn = useSelector(getisLoggedIn);
  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
