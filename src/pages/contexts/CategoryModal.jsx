import React, { createContext, useState } from "react";


export const CategoryContext = createContext();

const CategoryModalContainer = ({ children }) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <CategoryContext.Provider value={{ openModal, setOpenModal }}>
            {children}
        </CategoryContext.Provider>
    );
};


export default CategoryModalContainer;