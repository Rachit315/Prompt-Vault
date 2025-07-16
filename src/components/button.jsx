import React from 'react';
import './button.css'; 

const Button = ({ btn, className, onClick }) => {
  return (
    <button className={`bubbles ${className}`} onClick={onClick} >
      {btn}
    </button>
  );
};

export default Button;

