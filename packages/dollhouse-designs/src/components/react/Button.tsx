import React from 'react';
import '../styles/button.css'; // Ensure shared styles

interface ButtonProps {
  label: string;
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  primary,
  secondary,
  danger,
  size = 'medium',
  backgroundColor,
  onClick,
}) => {
  const classes = [
    'button',
    primary && 'button-primary',
    secondary && 'button-secondary',
    danger && 'button-danger',
    `button-${size}`,
  ]
    .filter(Boolean)
    .join(' ');

  const style = backgroundColor ? { backgroundColor } : {};

  return (
    <button type="button" className={classes} style={style} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
