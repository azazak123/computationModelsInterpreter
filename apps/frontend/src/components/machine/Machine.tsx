import React, { useState } from "react";
import Dropdown from "./dropdown/Dropdown";
import ExecuteButton from "./executeButton/ExecuteButton";
import InputOutput from "./inputOutput/InputOutput";
import "./Machine.scss";

function Machine(): React.ReactElement {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const handleInputChange = (value: string): void => {
    setInputValue(value);
  };
  const handleButtonClick = (): void => {
    setOutputValue(inputValue);
  };

  return (
    <div>
      <Dropdown options={["1", "2", "3"]} />
      <ExecuteButton label="Execute" onClick={handleButtonClick} />
      <div className="IO-counteiner">
        <InputOutput
          placeholder="Enter input"
          value={inputValue}
          onChange={handleInputChange}
          readOnly={false}
        />
        <InputOutput
          placeholder="Output"
          value={outputValue}
          onChange={handleInputChange}
          readOnly
        />
      </div>
    </div>
  );
}

export default Machine;
