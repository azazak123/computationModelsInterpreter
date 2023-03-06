import React, { useState } from "react";
import "./HeaderDropdown.scss";

interface Props {
  title: string;
  children: React.ReactElement;
}

function HeaderDropdown({ title, children }: Props): React.ReactElement {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  function handleMouse(isVisible: boolean): void {
    setIsDropdownVisible(isVisible);
  }

  return (
    <div
      className="header-dropdown-container"
      onMouseEnter={() => {
        handleMouse(true);
      }}
      onMouseLeave={() => {
        handleMouse(false);
      }}
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
