import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonComponent } from 'semantic-ui-react';

const Button = ({title, type, disabled}) => {
  return (
    <ButtonComponent type={type} disabled={disabled}>
      {title}
    </ButtonComponent>
  );
};

Button.defaultProps = {
  type: 'button',
  disabled: false
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool
};

export default Button;