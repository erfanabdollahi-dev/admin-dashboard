import React, { useState } from "react";
import Navbar from "./navbar/Index";
import Sidebar from "./sidebar/Index";
import {
    SidebarContext,
    SidebarContextContainer,
} from "./contexts/SidebarContext";
import Dashboard from "../../pages/dashboard/Dashboard";
import Category from "@/pages/category/Category";
import CategoryModalContainer from "@/pages/contexts/CategoryModal";
const Index = () => {
    return (
        <SidebarContextContainer>
            <Navbar />
            <Sidebar />

            {/* <Dashboard /> */}
            <CategoryModalContainer>

            <Category/>
            </CategoryModalContainer>
        </SidebarContextContainer>
    );
};

export default Index;
