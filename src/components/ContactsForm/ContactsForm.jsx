import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import s from './ContactsForm.module.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function ContactsForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  console.log('#####FORMcontacts', contacts);
  //const contacts = useSelector(state => state.сontactsReduscer);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }

    console.log('VALUE:', e.currentTarget);
    console.log('NAME:', [name]);
  };

  const onAddContact = (name, number) => {
    dispatch(addContact(name, number));
  };

  const alreadyExistsContact = contacts.some(
    contact => contact.name.toLowerCase() === name.toLowerCase(),
  );

  const handleSubmit = e => {
    e.preventDefault();

    if (alreadyExistsContact) {
      alert(`${name} is already in contacts.`);
      return;
    }
    onAddContact(name, number);

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form
        className={s.form}
        onSubmit={handleSubmit}
        //   onSubmit={(e) => {
        //     e.preventDefault();
        //     console.log(e.currentTarget);
        //   }}
      >
        {/* <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            id={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label htmlFor="number">
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            id={number}
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label> */}
        {/* <button
          onClick={() => {
            console.log('add contakt');
          }}
          type="submit"
        >
          add contact
        </button> */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
          }}
        >
          <TextField
            helperText="Please enter the name"
            //id="demo-helper-text-aligned"
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            id={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <TextField
            helperText="Please enter the number "
            //id="demo-helper-text-aligned"
            label="Number"
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            id={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </Box>
        <Box sx={{ '& button': { m: 1 } }}>
          <Button
            variant="outlined"
            color="primary"
            size="medium"
            type="submit"
            onClick={() => {
              console.log('add contakt');
            }}
          >
            add contact
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default ContactsForm;

// export default function HelperTextAligned() {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         alignItems: 'center',
//         '& > :not(style)': { m: 1 },
//       }}
//     >
//       <TextField
//         helperText="Please enter your name"
//         id="demo-helper-text-aligned"
//         label="Name"
//       />
//       <TextField
//         helperText=" "
//         id="demo-helper-text-aligned-no-helper"
//         label="Name"
//       />
//     </Box>
//   );
// }
