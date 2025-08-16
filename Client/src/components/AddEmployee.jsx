import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import API from "../api";

const AddEmployee = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    position: "",
    department: "",
    salary: "",
    address: "",
  });

  const [msg, setMsg] = useState("");
  const [alertType, setAlertType] = useState("success");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      axios
        .get(`${API}/employees/${id}`)
        .then((res) => {
          setFormData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setAlertType("danger");
          setMsg("Error fetching employee data.");
          setLoading(false);
          console.error(err);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`${API}/employees/${id}`, formData);
        setAlertType("success");
        setMsg("Employee updated successfully!");
      } else {
        await axios.post(`${API}/employees`, formData);
        setAlertType("success");
        setMsg("Employee added successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          gender: "",
          position: "",
          department: "",
          salary: "",
          address: "",
        });
      }
    } catch (err) {
      setAlertType("danger");
      setMsg("Error saving employee. Please try again.");
      console.error(err);
    }
  };

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="container py-4">
      <h3 className="mb-4">{id ? "Update Employee" : "Add Employee"}</h3>

      {msg && <div className={`alert alert-${alertType}`}>{msg}</div>}

      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Phone</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Position</label>
          <input
            type="text"
            name="position"
            className="form-control"
            value={formData.position}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Department</label>
          <input
            type="text"
            name="department"
            className="form-control"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Salary</label>
          <input
            type="number"
            name="salary"
            className="form-control"
            value={formData.salary}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Address</label>
          <textarea
            name="address"
            className="form-control"
            rows="3"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12">
          <label className="form-label d-block mb-2">Gender</label>
          <div className="d-flex flex-wrap gap-3">
            {["Male", "Female", "Other"].map((g) => (
              <div className="form-check" key={g}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id={`gender${g}`}
                  value={g}
                  checked={formData.gender === g}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor={`gender${g}`}>
                  {g}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            {id ? "Update Employee" : "Add Employee"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
