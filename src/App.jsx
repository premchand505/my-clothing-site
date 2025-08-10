import React from "react";
import { BrowserRouter } from "react-router-dom";
import Mainlayout from "./layouts/Mainlayout";
import Approutes from "./routes/Approutes";

function App() {
  return (
    <BrowserRouter>
      <Mainlayout>
        <Approutes />
      </Mainlayout>
    </BrowserRouter>
  );
}

export default App;
