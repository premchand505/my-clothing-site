import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
      © {new Date().getFullYear()} Appuson Clothing. All rights reserved.
    </footer>
  );
}

export default Footer;
