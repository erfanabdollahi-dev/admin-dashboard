import { createContext, useState } from "react";

export const SidebarContext = createContext();

export const SidebarContextContainer = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const ToggleSidebar = () => setSidebarOpen((o) => !o);
    const OpenSidebar = (state) => setSidebarOpen(state);

    return (
        <SidebarContext.Provider
            value={{ sidebarOpen, ToggleSidebar, OpenSidebar }}
        >
            {children}
        </SidebarContext.Provider>
    );
};
