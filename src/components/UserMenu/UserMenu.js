import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { getUserName } from 'redux/auth/auth-selectors';
import Button from '@mui/material/Button';
//import defaultAvatar from './default-avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
    marginLeft: 200,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  //const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <span style={styles.name}>Glad to see you, {name}</span>
      {/* <button type="button" onClick={() => dispatch(logout())}>
        Выйти
      </button> */}
      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </Button>
    </div>
  );
}
