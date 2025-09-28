import React from "react";

function NavMid() {
    return (
        <div className="navbar-left-right ">
            <input
                type="text"
                id="navbar-search"
                placeholder="جستجو"
                className="navbar-search-input "
            />
            <label htmlFor="navbar-search" className="navbar-search-label ">
                <i className="bxr  bx-search"></i>
            </label>
        </div>
    );
}

export default NavMid;
