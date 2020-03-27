import React from 'react';
import PropTypes from 'prop-types';

import { Btn } from './styles';

function Button({ text, handleClick, icon, type }) {
  return (
    <Btn onClick={handleClick} type={type}>
      {icon && icon}
      {text}
    </Btn>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  type: PropTypes.string,
};

Button.defaultProps = {
  type: 'secondary',
  handleClick: () => {},
  icon: <></>,
};

export default Button;
