import React from 'react';

const NavLeft = () => {
    return (
        <div className="navbar-left">
            <div className="navbar-left-right ">
                <input
                    type="text"
                    id="navbar-search"
                    placeholder="جستجو"
                    className="navbar-search-input "
                />
                <label
                    htmlFor="navbar-search"
                    className="navbar-search-label "
                >
                    <i className="bxr  bx-search"></i>
                </label>
            </div>
            <div className="navbar-left-left ">
                <i className="bxr  bx-bell-ring"></i>
                <i className="bxr  bx-list-ul-square"></i>
            </div>
        </div>
    );
};

export default NavLeft;
