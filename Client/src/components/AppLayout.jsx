import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const AppLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="d-flex vh-100">
      {sidebarOpen && <Sidebar />}
      <div className="flex-grow-1 d-flex flex-column">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="p-3" style={{ overflowY: "auto" }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;