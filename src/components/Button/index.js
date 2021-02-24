import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({
  className,
  isloading,
  value,
  icon,
  onClick,
}) => (
  <div className="row justify-content-center my-3 px-3" onClick={onClick}>
    <div class="submit signinSubmit">
      <span class="submit_text">{value}</span>  {icon}
    </div>
    {/* <a
      className={className}
      isloading={isloading}
      onClick={onClick}
    >
      {value}
    </a> */}
  </div>

);

Button.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]).isRequired,
  className: PropTypes.string,
  isloading: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: null,
  onClick: null,
  isloading: null,
};

export default Button;
