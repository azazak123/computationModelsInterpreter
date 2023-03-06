import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MachineInfo.scss";
import Machines, { type Machine } from "./machineInfo/Data";

function MachineInfo(): React.ReactElement {
  const [info, setInfo] = useState<Machine | undefined>();
  const { index } = useParams<{ index?: string }>();

  useEffect(() => {
    if (index !== undefined && Machines[parseInt(index, 10)] !== undefined) {
      setInfo(Machines[parseInt(index, 10)]);
    }
  }, [index]);

  return (
    <div className="machine-container">
      <h1>{info?.name}</h1>
      <p>{info?.description}</p>
      <h2>Components</h2>
      <ul>
        <li>
          Tape - an infinitely long tape divided into cells that can be read
          from and written to
        </li>
        <li>
          Head - a mechanism that moves left or right along the tape and reads
          or writes symbols on each cell
        </li>
        <li>
          State register - a finite set of states that the machine can be in at
          any given time
        </li>
        <li>
          Transition function - a set of rules that specify how the machine
          should transition from one state to another based on the symbol read
          by the head
        </li>
      </ul>
    </div>
  );
}

export default MachineInfo;
