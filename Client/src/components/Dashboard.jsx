import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../api";

const Dashboard = () => {
  const [counts, setCounts] = useState({ departments: 0, employees: 0 });

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const res = await axios.get(`${API}/dashboard/counts`);
        setCounts(res.data);
      } catch (err) {
        console.error("Error fetching counts", err);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className="d-flex">

      <div className="p-4 flex-grow-1">
        <h2 className="mb-4">Dashboard</h2>

        <div className="row">
          {/* Departments Card */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Total Departments</h5>
                <h3 className="text-primary">{counts.departments}</h3>
              </div>
            </div>
          </div>

          {/* Employees Card */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Total Employees</h5>
                <h3 className="text-success">{counts.employees}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
