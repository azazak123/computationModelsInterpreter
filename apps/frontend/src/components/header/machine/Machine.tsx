import React, { useState } from "react";
import InputOutput from "./inputOutput/InputOutput";

function  Machine(): React.ReactElement {
    const [inputValue, setInputValue] = useState("");
    const [outputValue, setOutputValue] = useState("");

    const handleInputChange = (value: string) : void => {
        setInputValue(value);
        setOutputValue(value);
    };

    return (
        <div>
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
    );
};

export default Machine;