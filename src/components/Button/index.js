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
  <div  onClick={onClick}>
    <div class={className ? `${className} btn` : `btn`} >
      {value}
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
