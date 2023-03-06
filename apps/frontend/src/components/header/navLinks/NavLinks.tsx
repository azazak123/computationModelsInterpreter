import React from "react";
import Machines, {
  type Machine,
} from "../../pages/machinesPage/machineInfo/Data";
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
            {Machines.map((machine: Machine) => (
              <li key={machine.id}>
                <a href={`/machinesInfo/${machine.id}`}>{machine.name}</a>
              </li>
            ))}
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
