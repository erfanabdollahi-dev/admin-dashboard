import React, { useContext } from "react";
import ThemeButton from "../../../components/ThemeButton";
import { SidebarContext } from "../contexts/SidebarContext";

const NavRight = () => {
  const { ToggleSidebar } = useContext(SidebarContext);
  return (
    <div className="navbar-right">
      <i className="bx  bx-menu " onClick={()=>ToggleSidebar()}></i>
      <ThemeButton />
    </div>
  );
};

export default NavRight;
