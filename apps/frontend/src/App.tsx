import React from "react";
import { Routes, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/pages/home/Home";

function App(): React.ReactElement {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
