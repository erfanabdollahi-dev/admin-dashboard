import React from "react";
import SubMenu from "./SubMenu";
import Item from "./Item";

const ItemControl = (props) => {
    switch (props.control) {
        case "item":
            return <Item {...props} />;
        case "submenu":
            return <SubMenu {...props} />;
        default:
            return null;
    }
};

export default ItemControl;
