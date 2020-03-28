import React from 'react';
import PropTypes from 'prop-types';
import { Input as InputComponent } from 'semantic-ui-react';

const Input = ({
  placeholder,
  onChange,
  disabled,
  value,
  title,
  error,
  name,
  icon,
  id,
  type
}) => {
  return (
    <div>
      {title && <label htmlFor={id}>{title}</label>}
      <InputComponent
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        value={value}
        error={error}
        name={name}
        icon={icon}
        type={type}
      />
    </div>
  );
};

Input.defaultProps = {
  placeholder: '',
  disabled: false,
  error: false,
  icon: '',
  type:"text"
};

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
  error: PropTypes.bool,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string
};

export default Input;
