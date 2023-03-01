import React from "react";
import "./NavLinks.scss";

function NavLinks(): React.ReactElement {
  return (
    <ul className="nav-links">
      <li>
        <a href="/apps/front/public">Home</a>
      </li>
      <li>
        <a href="/apps/front/public">Machines</a>
      </li>
      <li>
        <a href="/apps/front/public">About</a>
      </li>
    </ul>
  );
}

export default NavLinks;
