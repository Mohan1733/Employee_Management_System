const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./db");

// Example routes
const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const dashboardRoutes = require("./routes/dashboard");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/employees", employeeRoutes);
app.use("/dashboard", dashboardRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("✅ API is running");
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
