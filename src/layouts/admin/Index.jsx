import React, { useState } from "react";
import Navbar from "./navbar/Index";
import Sidebar from "./sidebar/Index";
import {
    SidebarContext,
    SidebarContextContainer,
} from "./contexts/SidebarContext";
const Index = () => {
    return (
        <SidebarContextContainer>
            <Navbar />
            <Sidebar />
        </SidebarContextContainer>
    );
};

export default Index;
