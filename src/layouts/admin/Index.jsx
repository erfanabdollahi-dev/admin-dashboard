import React, { useState } from "react";
import Navbar from "./navbar/Index";
import Sidebar from "./sidebar/Index";
import {
    SidebarContext,
    SidebarContextContainer,
} from "./contexts/SidebarContext";
import Dashboard from "../../pages/dashboard/Dashboard";
import Category from "@/pages/category/Category";
const Index = () => {
    return (
        <SidebarContextContainer>
            <Navbar />
            <Sidebar />

            {/* <Dashboard /> */}
            <Category/>
        </SidebarContextContainer>
    );
};

export default Index;
