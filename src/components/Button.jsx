import React from 'react';

const Button = ({ onClick, className = 'btn', children }) => {
  return (
    <div>
      <button onClick={onClick} className={className}>
        {children}
      </button>
    </div>
  );
};

export default Button;
