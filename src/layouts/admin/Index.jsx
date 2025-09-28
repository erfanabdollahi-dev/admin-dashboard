import React, { useState } from "react";
import Navbar from "./navbar/Index";
import Sidebar from "./sidebar/Index";
import {
    SidebarContext,
    SidebarContextContainer,
} from "./contexts/SidebarContext";
import Dashboard from "../../pages/dashboard/Dashboard";
const Index = () => {
    return (
        <SidebarContextContainer>
            <Navbar />
            <Sidebar />

            <Dashboard />
        </SidebarContextContainer>
    );
};

export default Index;
