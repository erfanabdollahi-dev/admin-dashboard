import React, { useContext, useEffect, useState } from "react";
import "./category.css";
import CategoryTable from "./CategoryTable";
import AddCategoryModal from "./modal/AddCategory";
import CategoryModalContainer, {
    CategoryContext,
} from "../contexts/CategoryModal";
const Category = () => {
    const { openModal, setOpenModal } = useContext(CategoryContext);

    useEffect(() => {
        console.log(openModal);
    }, [openModal]);
    return (
        <>
            <AddCategoryModal />
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
                        <i
                            onClick={() => setOpenModal(true)}
                            className="bx bxs-plus-square category-add"
                        ></i>
                    </div>
                </div>
                <div className="category-body">
                    <CategoryTable />
                </div>
                <div className="category-footer w-full flex justify-center items-center">
                    <nav aria-label="Page navigation example">
                        <ul class="flex items-center -space-x-px h-10 text-base">
                            <li>
                                <a
                                    href="#"
                                    class="pagination-item"
                                >
                                    <span class="sr-only">Previous</span>
                                    <svg
                                        class="w-3 h-3 rtl:rotate-180"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 6 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 1 1 5l4 4"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="pagination-item rounded-none border-l-1"
                                >
                                    1
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="pagination-item rounded-none border-l-1"
                                >
                                    1
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="pagination-item rounded-none border-l-1"
                                >
                                    1
                                </a>
                            </li>
                            
                            <li>
                                <a
                                    href="#"
                                    class="pagination-item border-l-1 border-r-1 rounded-r-none rounded-l-lg"
                                >
                                    <span class="sr-only">Next</span>
                                    <svg
                                        class="w-3 h-3 rtl:rotate-180"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 6 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="m1 9 4-4-4-4"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </main>
        </>
    );
};

export default Category;
