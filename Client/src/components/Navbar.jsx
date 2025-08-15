import React from "react";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar px-3 d-flex align-items-center position-relative" style={{backgroundColor: "black"}}>
      {/* Sidebar toggle button on the left */}
      <button
        className="btn btn-outline-light position-absolute start-0 ms-3"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        ☰
      </button>

      {/* Centered title */}
      <span className="navbar-brand mx-auto fw-bold text-white">
        Employee Management System
      </span>
    </nav>
  );
};

export default Navbar;