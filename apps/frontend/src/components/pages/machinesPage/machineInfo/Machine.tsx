import React from 'react';
import './MachineInfo.scss';

interface Props {
    title: string,
    text: string
}

function MachineInfo({title, text}: Props): React.ReactElement {
  return (
    <div className="machine-container">
      <h1>{title}</h1>
      <p>{text}</p>
      <h2>Components</h2>
      <ul>
        <li>Tape - an infinitely long tape divided into cells that can be read from and written to</li>
        <li>Head - a mechanism that moves left or right along the tape and reads or writes symbols on each cell</li>
        <li>State register - a finite set of states that the machine can be in at any given time</li>
        <li>Transition function - a set of rules that specify how the machine should transition from one state to another based on the symbol read by the head</li>
      </ul>
    </div>
  );
};

export default MachineInfo;