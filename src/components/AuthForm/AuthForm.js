import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { login } from 'redux/auth/auth-operations';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router';

const styles = {
  title: {
    textAlign: 'center',
  },
  form: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: 10,
    alignItems: 'center',
    width: 320,
    justifyContent: 'center',
  },

  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function AuthForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { authType } = useParams();

  console.log('!!!!!!!!!!!!!!!AUTHType', authType);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (authType === 'login') {
      dispatch(login({ email, password }));
      setEmail('');
      setPassword('');
    } else {
      dispatch(register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            '& > :not(style)': { m: 1 },
          }}
        >
          {authType === 'register' && (
            <TextField
              helperText="Please enter your name"
              id="demo-helper-text-aligned"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              label="name"
            />
          )}

          <TextField
            helperText="Please enter your email"
            id="demo-helper-text-aligned"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            label="email"
          />
          <TextField
            helperText="Please enter your password "
            //id="demo-helper-text-aligned"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            label="password"
          />
        </Box>

        <Box sx={{ '& button': { m: 1 } }}>
          {authType === 'register' && (
            <Button
              variant="outlined"
              color="primary"
              size="small"
              type="submit"
            >
              Sign Up
            </Button>
          )}
          {authType === 'login' && (
            <Button
              variant="outlined"
              color="primary"
              size="small"
              type="submit"
            >
              Login
            </Button>
          )}
        </Box>
      </form>
    </div>
  );
}
