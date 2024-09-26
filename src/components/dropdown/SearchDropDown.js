import React, { useState, useRef, useEffect } from 'react';
import style from '../dropdown/style/SearchbarDropdown.module.css'; // Create a corresponding CSS module for styling

const SearchDropdown = ({ title, options, onOptionSelect, value, onChange, type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const dropdownRef = useRef(null);

  // const toggleDropdown = () => setIsOpen(!isOpen);

  // const handleOptionClick = (option) => {
  //   setSelectedValue(option);
  //   onOptionSelect(option);
  //   setIsOpen(false);
  // };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className={style.dropdown} ref={dropdownRef}>
      <div /*onClick={toggleDropdown}*/ className={style.dropdownHeader}>
        <h4>{title}</h4>
        {isOpen ? '▲' : '▼'}
      </div>
      {isOpen && (
        <div className={style.dropdownBody}>
          {type === 'range' ? (
            <div>
              <label>
                <span>{options.min}</span>
                <span>{options.min !== undefined && options.max !== undefined && options.min + ' - ' + options.max}</span>
              </label>
              <input type="range" min={options.min} max={options.max} step={options.step} value={selectedValue} onChange={(e) => {
                setSelectedValue(e.target.value);
                onChange(e.target.value);
              }} />
              <button onClick={() => setIsOpen(false)}>Apply</button>
            </div>
          ) : (
            <ul>
              {/* {options.map((option, index) => (
                <li key={index} onClick={() => handleOptionClick(option)}>
                  {option}
                </li>
              ))} */}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
