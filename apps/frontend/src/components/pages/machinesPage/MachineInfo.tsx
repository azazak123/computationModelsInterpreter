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
      <p>Inventor: {info?.inventor}</p>
      <p>Year:{info?.year}</p>
      <p>{info?.description}</p>
      <h2>Rules</h2>
      <ul>
        {info?.rules.map((rule)=><li>{rule}</li>)}
      </ul>
    </div>
  );
}

export default MachineInfo;
