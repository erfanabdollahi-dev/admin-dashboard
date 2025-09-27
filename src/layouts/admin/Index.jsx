import React, { useState } from "react";
import Navbar from "./navbar/Index";
import Sidebar from "./sidebar/Index";
import { SidebarContext } from "./contexts/SidebarContext";
const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const ToggleSidebar = () => setSidebarOpen((o) => !o);
  const OpenSidebar = (state) => setSidebarOpen(state);
  return (
    <>
      <SidebarContext.Provider
        value={{ sidebarOpen, ToggleSidebar, OpenSidebar }}
      >
        <Navbar />
        <Sidebar />
      </SidebarContext.Provider>
    </>
  );
};

export default Index;
