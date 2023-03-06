import React from "react";
import HeaderDropdown from "../HeaderDropdown/HeaderDropdown";
import "./NavLinks.scss";

function NavLinks(): React.ReactElement {
  return (
    <ul className="nav-links">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <HeaderDropdown title="Machines">
          <ul>
            <li>
              <a href="/machinesInfo/0">Turing machine</a>
            </li>
            <li>
              <a href="/machinesInfo/1">Post machine</a>
            </li>
          </ul>
        </HeaderDropdown>
      </li>
      <li>
        <a href="/apps/front/public">About</a>
      </li>
    </ul>
  );
}

export default NavLinks;
