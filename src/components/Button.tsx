import React from "react";

interface ButtonProps {
  value: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ value, onClick, className }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
