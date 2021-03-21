import React from 'react';
import PropTypes from 'prop-types';

function Select({ name, options, ...rest }) {
  return (
    <select name={ name } { ...rest }>
      { options.map((i) => (
        <option
          key={ i.value }
          value={ i.value }
        >
          {i.label}
        </option>)) }
    </select>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};

export default Select;
