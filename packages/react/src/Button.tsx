import React from 'react';
import '../../styles/src/components/button.css';

interface Props {
  label?: string;
  type?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  icon?: string;
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({
  label,
  type = 'primary',
  size = 'medium',
  icon,
  isLoading = false,
  disabled = false,
  fullWidth = false,
  onClick,
}) => {
  // Compute button classes
  const buttonType = `btn-${type}`;
  const buttonSize = `btn-${size}`;
  const isDisabled = disabled || isLoading;
  const iconClass = icon ? `icon-${icon}` : '';

  // Handle button click
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isDisabled && onClick) {
      onClick(event);
    }
  };

  return (
    <button
      className={`btn ${buttonType} ${buttonSize} ${
        fullWidth ? 'btn-full-width' : ''
      }`}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          {icon && <i className={iconClass}></i>}
          {label}
        </>
      )}
    </button>
  );
};

export default Button;
