import { useState } from 'react';

function ContactsForm(onSubmit) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // state = {
  //   name: '',
  //   number: '',
  // };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
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
    //setName(value);
    // console.log("VALUE:", e.currentTarget);
    // console.log("NAME:", [name]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);

    reset();
  };

  const reset = () => {
    // this.setState({ name: '', number: '' });
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
        <label>
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
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            id={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
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
