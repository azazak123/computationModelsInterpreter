import React from 'react';
import Header from "./components/header/Header";
import Machine from "./components/header/machine/Machine";

function App(): React.ReactElement {
  return (
      <div>
        <Header />
        <main>
            <Machine/>
        </main>
      </div>
  );
};

export default App;
