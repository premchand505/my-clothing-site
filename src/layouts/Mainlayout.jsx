import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Mainlayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default Mainlayout;
