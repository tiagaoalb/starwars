import React from 'react';
import PropTypes from 'prop-types';

function Button({ label, ...rest }) {
  return (
    <button type="button" { ...rest }>{label}</button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
