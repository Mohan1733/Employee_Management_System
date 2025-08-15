import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div
      className="d-flex flex-column  text-light border-end border-secondary vh-100 p-3"
      style={{ width: "220px", backgroundColor: "black" }}
    >
      <h4 className="fw-bold mb-4  text-info">EMS</h4>

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link text-light fw-semibold">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/add-employee" className="nav-link text-light fw-semibold">
            Add Employee
          </Link>
        </li>
        <li>
          <Link to="/list-employees" className="nav-link text-light fw-semibold">
            List Employees
          </Link>
        </li>
      </ul>

      <button
        onClick={handleLogout}
        className="btn btn-outline-light btn-sm w-100 mt-auto"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
