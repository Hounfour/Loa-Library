import React from 'react';
import '../styles/checkbox.css';

interface CheckboxProps {
  checked: boolean;
  value?: string;
  onChange?: (checked: boolean) => void; // Optional prop for handling change
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, value, onChange }) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    if (onChange) {
      onChange(isChecked); // Call the onChange prop if provided
    }
  };

  return (
    <label className="checkbox-label">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        className="checkbox-input"
      />
      {value && <span className="checkbox-value">{value}</span>}
    </label>
  );
};

export default Checkbox;
