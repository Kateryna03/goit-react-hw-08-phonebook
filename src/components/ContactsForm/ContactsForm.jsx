import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contacts/operations';

function ContactsForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
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
        onSubmit={handleSubmit}
        //   onSubmit={(e) => {
        //     e.preventDefault();
        //     console.log(e.currentTarget);
        //   }}
      >
        <label htmlFor="name">
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
        </label>
        <button
          onClick={() => {
            console.log('add contakt');
          }}
          type="submit"
        >
          add contact
        </button>
      </form>
    </div>
  );
}

export default ContactsForm;

/////////CLASS///////////////////////////////////////////////////////
// import React, { Component } from 'react';

// class ContactsForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//     // console.log("VALUE:", e.currentTarget);
//     // console.log("NAME:", [name]);
//   };

//   handleSubmit = e => {
//     const { name, number } = this.state;
//     e.preventDefault();
//     this.props.onSubmit(name, number);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <div>
//         <form
//           onSubmit={this.handleSubmit}
//           //   onSubmit={(e) => {
//           //     e.preventDefault();
//           //     console.log(e.currentTarget);
//           //   }}
//         >
//           <label>
//             Name
//             <input
//               type="text"
//               name="name"
//               value={this.state.name}
//               onChange={this.handleChange}
//               id={this.state.name}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//               required
//             />
//           </label>
//           <label>
//             Number
//             <input
//               type="tel"
//               name="number"
//               value={this.state.number}
//               onChange={this.handleChange}
//               id={this.state.number}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//               required
//             />
//           </label>
//           <button
//             onClick={() => {
//               console.log('add contakt');
//             }}
//             type="submit"
//           >
//             add contact
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default ContactsForm;
