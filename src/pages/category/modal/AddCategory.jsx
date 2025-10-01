import React, { createRef, useContext, useState } from "react";
import "./categoryModal.css";
import { CategoryContext } from "../../contexts/CategoryModal";

const AddCategoryModal = () => {
    const [fileName, setFileName] = useState("");
    const [isActive,setIsActive ] = useState(false);
    const statusRef = createRef(null);
    const {openModal,setOpenModal} = useContext(CategoryContext)
    const handleFile = (e) => {
        console.log(e);
        setFileName(e.target.value);
    };

    const handleCheck = () => {
        statusRef.current.checked = true;
        setIsActive(true)
    };
    const handleUnCheck = () => {
        statusRef.current.checked = false;
        setIsActive(false);
    };

    return (
        <div className={`modal-category ${openModal ? "modal-open" : null}  `}>
            <div className="modal-category-top ">
                <h1>افزودن دسته محصول</h1>
                <i
                    onClick={() => setOpenModal(p=>!p)}
                    className="bx bx-exit-fullscreen category-item"
                ></i>
            </div>

            <div className="modal-category-body  ">
                <div className="modal-category-body-inner  ">
                    <div className="modal-category-item">
                        <label
                            htmlFor="parent"
                            className="modal-category-lable"
                        >
                            دسته والد
                        </label>
                        <input
                            type="text"
                            id="parent"
                            className="modal-category-input "
                        />
                    </div>

                    <div className="modal-category-item">
                        <label
                            htmlFor="parent"
                            className="modal-category-lable"
                        >
                            عنوان
                        </label>
                        <input
                            type="text"
                            id="parent"
                            className="modal-category-input "
                        />
                    </div>

                    <div className="modal-category-item-textarea">
                        <label
                            htmlFor="parent"
                            className="modal-category-lable"
                        >
                            توضیحات
                        </label>
                        <textarea
                            type="text"
                            id="parent"
                            className="modal-category-textarea "
                        />
                    </div>

                    <div className="modal-category-item relative">
                        <label
                            htmlFor="file"
                            className="modal-category-lable  border-l-1 h-full items-center flex justify-center border-line-color"
                        >
                            تصویر
                        </label>
                        <input
                            type="file"
                            placeholder="تصویر"
                            id="file"
                            onChange={(e) => handleFile(e)}
                            className="modal-category-input-file  "
                        />
                        <input
                            type="text"
                            placeholder="هیچ تصویری انتخاب نشده"
                            readOnly
                            value={fileName}
                            className="modal-category-input  "
                        />
                    </div>

                    <div className="modal-category-item ">
                        <label
                            htmlFor=""
                            className="modal-category-lable border-l-1 border-line-color h-full flex justify-center items-center"
                        >
                            وضیعت
                        </label>
                        <input
                            type="checkbox"
                            id="status"
                            className=" hidden"
                            ref={statusRef}
                        />
                        <div className="status-con">
                            <div
                                onClick={handleCheck}
                                className={` status ${
                                    isActive ? "category-active" : null
                                } `}
                            >
                                <i className="bx bx-check sm:text-2xl text-lg"></i>
                                <h2 className="status-title">فعال</h2>
                            </div>

                            <div
                                onClick={handleUnCheck}
                                className={` status ${
                                    !isActive ? "category-not-active" : null
                                } `}
                            >
                                <i className="bx bx-x sm:text-2xl text-lg "></i>
                                <h2 className="status-title">غیر فعال</h2>
                            </div>
                        </div>
                    </div>

                    <div className="modal-category-buttons">
                        <button className=" hover:bg-warning-color bg-[var(--box-color)] ">
                            انصراف
                        </button>
                        <button className="   hover:bg-ok-color bg-ok-color">
                            ذخیره
                        </button>
                    </div>
                </div>
            </div>

            <div className="modal-category-bottom flex items-center justify-end "></div>
        </div>
    );
};

export default AddCategoryModal;
