import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Button = ({ variant = "primary", onClick, children, className = "" }) => {
  return (
    <button 
      className={`btn btn-${variant} ${className}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;