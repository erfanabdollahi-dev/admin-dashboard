import React from "react";
import './category.css'
const Category = () => {
    return (
        <main className="category ">
            <div className="category-header ">

                <div className="category-header-top">
                    <h1 className="catetory-title ">مدیریت دسته بندی ها</h1>
                </div>

                <div className="category-header-bottom">
                    <div className="category-search">
                        <i className="bx bx-search"></i>
                        <input
                            type="text"
                            placeholder="قسمتی از عنوان را وارد کنید"
                        />
                    </div>
                    <i className="bx bxs-plus-square category-add"></i>
                </div>
            </div>
            <div className="category-body"></div>
            <div className="category-footer"></div>
        </main>
    );
};

export default Category;
