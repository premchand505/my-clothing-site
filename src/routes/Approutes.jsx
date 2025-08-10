import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Tshirts from "../pages/Collections/Tshirts";


function Approutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tshirts" element={<Tshirts />} />
      
    </Routes>
  );
}

export default Approutes;
