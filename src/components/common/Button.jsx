import React from "react";

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
    >
      {children}
    </button>
  );
}

export default Button;
