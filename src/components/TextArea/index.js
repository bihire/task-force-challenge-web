import React from 'react';
import PropTypes from 'prop-types';
import './InputField.scss';

const TextArea = ({
  type,
  name,
  id,
  value,
  placeholder,
  className,
  disabled,
  pattern,
  min,
  max,
  onChange,
  required,
  error,
  onKeyUp,
  onFocus
}) => (
  <div className={className}>
    <div className="form_group">
      <textarea
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        className={className}
        disabled={disabled}
        pattern={pattern}
        min={min}
        max={max}
        onChange={onChange}
        required={required}
        onKeyUp={onKeyUp}
        onFocus={onFocus}
      />
      <div className="invalid_input">
        <span className="invalid_input_error">{error}</span>
      </div>
    </div>
  </div>
);

TextArea.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  min: PropTypes.string,
  max: PropTypes.string,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  error: PropTypes.string,
  onKeyUp: PropTypes.func,
  onFocus: PropTypes.func,
};

TextArea.defaultProps = {
  type: 'text',
  value: null,
  id: null,
  placeholder: null,
  className: null,
  min: null,
  max: null,
  onChange: null,
  required: false,
  pattern: null,
  disabled: null,
  error: null,
  onKeyUp: null,
  onFocus: null,
};

export default TextArea;
