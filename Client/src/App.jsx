import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import AddEmployee from "./components/AddEmployee";
import ListEmployees from "./components/ListEmployees";
import AppLayout from "./components/AppLayout";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes without sidebar */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes with sidebar layout */}
        <Route
          path="/dashboard"
          element={
            <AppLayout>
              <Dashboard />
            </AppLayout>
          }
        />
        <Route
          path="/add-employee"
          element={
            <AppLayout>
              <AddEmployee />
            </AppLayout>
          }
        />
        <Route
          path="/edit-employee/:id"
          element={
            <AppLayout>
              <AddEmployee />
            </AppLayout>
          }
        />
        <Route
          path="/list-employees"
          element={
            <AppLayout>
              <ListEmployees />
            </AppLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
