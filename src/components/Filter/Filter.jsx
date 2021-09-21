import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterContacts } from '../../redux/actions';

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
    <label>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={onChangeFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  );
};

Filter.defaultProps = {
  value: '',
};

Filter.prototype = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default connect()(Filter);
