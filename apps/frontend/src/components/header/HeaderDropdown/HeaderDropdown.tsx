import React, { useState } from "react";
import "./HeaderDropdown.scss";

interface Props {
  title: string;
  children: React.ReactElement;
}

function HeaderDropdown({ title, children }: Props): React.ReactElement {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  function handleMouseEnter(): void {
    setIsDropdownVisible(true);
  }
  function handleMouseLeave(): void {
    setIsDropdownVisible(false);
  }

  return (
    <div
      className="header-dropdown-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="header-dropdown-title" type="button">
        {title}
      </button>
      {isDropdownVisible && (
        <div className="header-dropdown-content">{children}</div>
      )}
    </div>
  );
}

export default HeaderDropdown;
