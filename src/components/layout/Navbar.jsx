import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiSearch, FiUser, FiShoppingCart, FiX } from "react-icons/fi";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
        {/* Left: Menu Icon */}
        <button onClick={toggleSidebar} className="text-2xl">
          <FiMenu />
        </button>

        {/* Center: Logo */}
        <Link to="/" className="text-xl font-bold">
          Appuson
        </Link>

        {/* Right: Icons */}
        <div className="flex items-center space-x-4 text-xl">
          <FiSearch className="cursor-pointer" />
          <Link to="/user">
          <FiUser />
          </Link>
          <Link to="/cart">
            <FiShoppingCart />
          </Link>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <FiX onClick={toggleSidebar} className="text-xl cursor-pointer" />
        </div>
        <div className="flex flex-col p-4 space-y-4">
          <Link to="/" onClick={toggleSidebar}>Home</Link>
          <Link to="/tshirts" onClick={toggleSidebar}>T-Shirts</Link>
          <Link to="/hoodies" onClick={toggleSidebar}>Hoodies</Link>
          <Link to="/pants" onClick={toggleSidebar}>Pants</Link>
        </div>
      </div>

      {/* Overlay when sidebar open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-30 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

export default Navbar;
