import React, { type ChangeEvent } from 'react';
import "./InputOutput.scss"

interface InputProps {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    readOnly: boolean;
}

function InputOutput({ placeholder, value, onChange, readOnly }: InputProps): React.ReactElement {
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) : void => {
        onChange(e.target.value);
    };

    return (
        <div className="put-container">
            <span>Code:</span>
            <textarea
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                readOnly = {readOnly}
                wrap="off"
            />
        </div>
    );
};

export default InputOutput;