import React from 'react';
import '../css/button.css';

const Button = ({ text, onClick, className, type, disabled }) => {
    return (
        <button
            className={`${className}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default Button;
