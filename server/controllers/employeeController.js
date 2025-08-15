const db = require("../db");

// Get all employees
exports.getEmployees = (req, res) => {
  db.query("SELECT * FROM employee", (err, results) => {
    if (err) return res.status(500).json({ message: "Error fetching employees" });
    res.json(results);
  });
};

// Get employee by ID
exports.getEmployeeById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM employee WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ message: "Error fetching employee" });
    if (results.length === 0) return res.status(404).json({ message: "Employee not found" });
    res.json(results[0]);
  });
};

// Add employee
exports.addEmployee = (req, res) => {
  const { name, email, phone, gender, position, department, salary, address } = req.body;
  const sql = `INSERT INTO employee 
    (name, email, phone, gender, position, department, salary, address) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  db.query(sql, [name, email, phone, gender, position, department, salary, address], (err) => {
    if (err) return res.status(500).json({ message: "Error adding employee" });
    res.status(201).json({ message: "Employee added successfully" });
  });
};

// Update employee
exports.updateEmployee = (req, res) => {
  const { id } = req.params;
  const { name, email, phone, gender, position, department, salary, address } = req.body;
  const sql = `UPDATE employee SET 
    name=?, email=?, phone=?, gender=?, position=?, department=?, salary=?, address=?
    WHERE id=?`;
  db.query(sql, [name, email, phone, gender, position, department, salary, address, id], (err) => {
    if (err) return res.status(500).json({ message: "Error updating employee" });
    res.json({ message: "Employee updated successfully" });
  });
};

// Delete employee
exports.deleteEmployee = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM employee WHERE id=?", [id], (err) => {
    if (err) return res.status(500).json({ message: "Error deleting employee" });
    res.json({ message: "Employee deleted successfully" });
  });
};
