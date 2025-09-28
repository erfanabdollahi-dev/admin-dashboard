import React, { useState } from "react";
import ItemControl from "./items/ItemControl";
import {
    cart,
    community,
    connections,
    dashboard,
    shop,
} from "./items/ItemInits";

const Items = () => {
    const [openMenu, SetOpenMenu] = useState(null);
    const [Active, SetActive] = useState("dashboard");

    const toggleMenu = (menu) => {
        SetOpenMenu(openMenu == menu ? null : menu);
    };
    const toggleActive = (name) => {
        SetActive(Active == name ? Active : name);
    };

    return (
        <>
            {/* dashbaord */}
            <ItemControl
                control="item"
                Active={Active}
                toggleActive={toggleActive}
                item={dashboard}
            />

            {/* shop */}
            <ItemControl
                control="submenu"
                openMenu={openMenu}
                toggleMenu={toggleMenu}
                Active={Active}
                toggleActive={toggleActive}
                item={shop}
            />

            {/* cart */}
            <ItemControl
                control="submenu"
                openMenu={openMenu}
                toggleMenu={toggleMenu}
                Active={Active}
                toggleActive={toggleActive}
                item={cart}
            />

            {/* community */}
            <ItemControl
                control="submenu"
                openMenu={openMenu}
                toggleMenu={toggleMenu}
                Active={Active}
                toggleActive={toggleActive}
                item={community}
            />
            {/* connections */}
            <ItemControl
                control="submenu"
                openMenu={openMenu}
                toggleMenu={toggleMenu}
                Active={Active}
                toggleActive={toggleActive}
                item={connections}
            />
        </>
    );
};

export default Items;
