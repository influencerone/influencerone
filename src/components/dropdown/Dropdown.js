import React, { useState, useRef, useEffect } from 'react';
import style from '../dropdown/style/style.module.css';

const Dropdown = ({ options, selectedValue, onSelect, label, showCode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  // const filteredOptions = options.filter(option =>
  //   option.label.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}  >
      <label>{label}</label>
      <div className={style.dropdown_toggle} onClick={() => setIsOpen(!isOpen)}>
        {selectedValue ? (
          showCode ? (
            <>
              {options.find((opt) => opt.value === selectedValue)?.flag}{" "}
              {options.find((opt) => opt.value === selectedValue)?.label} 
              {options.find((opt) => opt.value === selectedValue)?.code}
            </>
          ) : (
            options.find((opt) => opt.value === selectedValue)?.label || "Select"
          )
        ) : "Select"}
      </div>
      {isOpen && (
        <div className={style.dropdown_menu}>
          {label === "Country" && (
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          )}
          <ul className={style.dropdown_list}>
            {/* {filteredOptions.map((option) => (
              <li
                key={option.value}
                className={`${style.dropdown_item} ${selectedValue === option.value ? style.selected : ""}`}
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false);
                }}
              >
                {showCode ? (
                  <div className='d-flex justify-content-between'>
                    <span>{option.flag} {option.label}</span>
                    <span>{option.code}</span>
                  </div>
                ) : (
                  option.label
                )}
              </li>
            ))} */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
