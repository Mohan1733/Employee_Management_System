import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API from "../api";

const ListEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API}/employees`);
      setEmployees(res.data);
    } catch (err) {
      console.error("Error fetching employees:", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this employee?")) {
      try {
        await axios.delete(`${API}/employees/${id}`);
        setMsg("Employee deleted successfully");
        fetchData();
      } catch (err) {
        console.error("Error deleting employee:", err);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-fluid">
      <h3 className="mb-4">Employee List</h3>
      {msg && <div className="alert alert-success">{msg}</div>}
      <div className="table-responsive rounded shadow-sm">
        <table className="table table-striped table-hover align-middle mb-0">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Position</th>
              <th>Department</th>
              <th>Salary</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.phone}</td>
                  <td>{emp.gender}</td>
                  <td>{emp.position}</td>
                  <td>{emp.department}</td>
                  <td>₹{parseFloat(emp.salary).toLocaleString()}</td>
                  <td className="text-center">
                    <div className="d-flex flex-column flex-md-row justify-content-center">
                      <button
                        className="btn btn-sm btn-outline-primary me-md-2 mb-2 mb-md-0"
                        onClick={() => navigate(`/edit-employee/${emp.id}`)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(emp.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center">
                  No employees found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListEmployees;
