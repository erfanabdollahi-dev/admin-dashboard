import React, { Children } from "react";

const SubMenu = ({ openMenu, toggleMenu, Active, toggleActive, item }) => {
    return (
        <>
            <div className="sidebar-sub-parent">
                <div
                    className={`sidebar-item-child justify-between group ${
                        openMenu == item.name ? "sidebar-submenu-active" : null
                    }`}
                    onClick={() => toggleMenu(item.name)}
                >
                    <div className="flex gap-4">
                        <i className={`${item.icon} sidebar-item-icon`}></i>

                        <h2 className="sidebar-item-title ">{item.title}</h2>
                    </div>
                    <i
                        className={`bx bxs-chevron-up sidebar-submenu-arrow ${
                            openMenu == item.name ? "arrow-rotate" : null
                        }`}
                    ></i>
                </div>
                <ul
                    className={`sidebar-submenu  ${
                        openMenu == item.name ? "submenu-show" : null
                    }`}
                >
                    {item.children.map((child, i) => (
                        <li
                            key={child.title}
                            className={`sidebar-item-child  group ${
                                Active == child.title
                                    ? "sidebar-item-active"
                                    : null
                            }`}
                            onClick={() => toggleActive(child.title)}
                        >
                            <i
                                className={`${child.icon} sidebar-item-icon`}
                            ></i>

                            <h2 className="sidebar-item-title ">
                                {child.title}
                            </h2>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="dashed"></div>
        </>
    );
};

export default SubMenu;
