import React from 'react';
import './Dropdown.scss';

interface DropdownProps {
    options: string[];
}

function Dropdown({ options }: DropdownProps): React.ReactElement {
    return (
        <select className="dropdown">
            {options.map((option) => (
                <option key={option}>{option}</option>
            ))}
        </select>
    );
};

export default Dropdown;