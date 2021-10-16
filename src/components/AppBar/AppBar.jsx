import { useSelector } from 'react-redux';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import Navigation from '../Navigation/Navigation';
// import styles from './AppBar.module.css';
import { getisLoggedIn } from 'redux/auth/auth-selectors';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

// export default function AppBar() {
//   const isLoggedIn = useSelector(getisLoggedIn);
//   return (
//     <header className={styles.header}>
//       <Navigation />
//       {isLoggedIn ? <UserMenu /> : <AuthNav />}
//     </header>
//   );
// }

export default function ButtonAppBar() {
  const isLoggedIn = useSelector(getisLoggedIn);
  console.log('isLoggedIn', isLoggedIn);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
