import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

import { useEffect } from 'react';
import { fetchContact, deleteContact } from 'redux/contacts/operations';
import { getLoadind, getNormolizedContacts } from 'redux/contacts/selectors';

//import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
//import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

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
    // <ul>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {loading ? (
        <h1>LOADING...</h1>
      ) : (
        contacts.map(({ id, name, number }) => (
          <ListItem
            key={id}
            //disableGutters
            alignItems="flex-start"
            secondaryAction={
              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  type="button"
                  onClick={() => onDeleteContact(id)}
                >
                  Delete
                </Button>
              </Stack>
            }
          >
            <ListItemAvatar>
              <Avatar alt={name} src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              marginLeft="20"
              primary={name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {number}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        ))
      )}
    </List>
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
