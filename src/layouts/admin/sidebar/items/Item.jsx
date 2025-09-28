import React from "react";

const Item = ({ Active, toggleActive, item }) => {
    return (
        <>
            <div className="sidebar-item">
                <ul className="sidebar-item">
                    <li
                        className={`sidebar-item-child  group ${
                            Active == item.title ? "sidebar-item-active" : null
                        }`}
                        onClick={() => toggleActive(item.title)}
                    >
                        <i className={`${item.icon} sidebar-item-icon `}></i>
                        <h2 className="sidebar-item-title ">{item.title}</h2>
                    </li>
                </ul>
            </div>

            <div className="dashed"></div>
        </>
    );
};

export default Item;
