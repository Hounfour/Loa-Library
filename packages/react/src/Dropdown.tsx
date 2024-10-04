import React, { useState } from 'react';
import '../../styles/src/components/dropdown.css';

// Define the prop types for the Dropdown component
interface DropdownProps {
  options: string[]; // An array of strings for the options
  label?: string; // Optional label
  onOptionSelected: (option: string) => void; // Callback when an option is selected
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  label = 'Select an option',
  onOptionSelected,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // Type for isOpen state
  const [selectedOption, setSelectedOption] = useState<string | null>(null); // Type for selectedOption state

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    // Type for the option parameter
    setSelectedOption(option);
    setIsOpen(false);
    onOptionSelected(option); // Call the prop function when an option is selected
  };

  const displayText = selectedOption || label;

  return (
    <div className="dropdown" onClick={toggleDropdown}>
      <button className="dropdown-toggle">
        {displayText}
        <span className={`arrow ${isOpen ? 'is-active' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={(e) => {
                e.stopPropagation();
                selectOption(option);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
