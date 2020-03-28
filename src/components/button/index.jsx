import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonComponent } from 'semantic-ui-react';

const Button = ({title, type, disabled, onClick}) => {
  return (
    <ButtonComponent type={type} disabled={disabled} onClick={onClick}>
      {title}
    </ButtonComponent>
  );
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  onClick:  ()=>{}
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;