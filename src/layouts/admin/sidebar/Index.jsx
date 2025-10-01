import React, { useContext, useEffect, useRef, useState } from "react";
import "./Sidebar.css";
import ItemControl from "./items/ItemControl";
import {
    cart,
    community,
    connections,
    dashboard,
    shop,
} from "./items/ItemInits";
import Items from "./Items";
import Info from "./Info";
import { SidebarContext } from "../contexts/SidebarContext";

const Index = () => {
    const { OpenSidebar, sidebarOpen } = useContext(SidebarContext);
    const sidebarRef = useRef(null);
    const handleClickOutside = (event) => {
        
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            OpenSidebar(false);
        }
    };
    useEffect(() => {
        
        const isLargeScreen = window.innerWidth <= 1024
        if (sidebarOpen && isLargeScreen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sidebarOpen]);

    return (
        <aside
            ref={sidebarRef}
            className={`sidebar   ${!sidebarOpen ? "sidebar-closed" : null}`}
            onClick={() => {
                if (!sidebarOpen) {
                    OpenSidebar(true);
                }
            }}
        >
            {/* info */}
            <Info />

            {/* items */}
            <Items />
        </aside>
    );
};

export default Index;
