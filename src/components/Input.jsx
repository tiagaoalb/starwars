import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, name, ...rest }) {
  return (
    <label htmlFor={ name }>
      {name}
      :
      <input
        type={ type }
        name={ name }
        { ...rest }
      />
    </label>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
