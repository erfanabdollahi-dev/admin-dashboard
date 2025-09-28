import React from "react";
import NavRight from "./Nav-Right";
import NavLeft from "./Nav-Left";
import "./Navbar.css";
import NavMid from "./Nav-Mid";
const Index = () => {
    return (
        <nav className="navbar">
            <NavRight />
            <NavMid />
            <NavLeft />
        </nav>
    );
};

export default Index;
