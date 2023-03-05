import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/pages/home/Home";
import MachineInfo from "./components/pages/machinesPage/MachineInfo";

function App(): React.ReactElement {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="machinesInfo/:index" element={<MachineInfo />} />
      </Routes>
    </div>
  );
}

export default App;
