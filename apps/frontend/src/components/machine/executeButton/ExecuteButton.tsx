import React from "react";
import "./ExecuteButton.scss";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

function ExecuteButton({ label, onClick }: ButtonProps): React.ReactElement {
  return (
    <button className="button" type="submit" onClick={onClick}>
      {label}
    </button>
  );
}

export default ExecuteButton;
