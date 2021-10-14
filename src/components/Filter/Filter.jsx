import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
import { filterContacts } from '../../redux/contacts/actions';

//import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

// export default function CustomizedInputBase() {
//   return (
//     <Paper
//       component="form"
//       sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
//     >
//       <IconButton sx={{ p: '10px' }} aria-label="menu">
//         <MenuIcon />
//       </IconButton>
//       <InputBase
//         sx={{ ml: 1, flex: 1 }}
//         placeholder="Search Google Maps"
//         inputProps={{ 'aria-label': 'search google maps' }}
//       />
//       <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
//         <SearchIcon />
//       </IconButton>
//       <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//       <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
//         <DirectionsIcon />
//       </IconButton>
//     </Paper>
//   );

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const findContact = name => {
    dispatch(filterContacts(name.toLowerCase()));
  };

  const onChangeFilter = e => {
    findContact(e.target.value);
  };
  return (
    // <label>
    //   Find contacts by name
    //   <input
    //     type="text"
    //     value={filter}
    //     onChange={onChangeFilter}
    //     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //     title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
    //     required
    //   />
    // </label>
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 335,
        outline: 'primary',
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Find contacts by name"
        inputProps={{ 'aria-label': 'search google maps' }}
        type="text"
        value={filter}
        onChange={onChangeFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        require
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
      {/* <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton> */}
    </Paper>
  );
};

Filter.defaultProps = {
  value: '',
};

Filter.prototype = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
