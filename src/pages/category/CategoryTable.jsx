import React from "react";
const counter = 10;

const CategoryTable = () => {
    return (
        <div className="default-table">
            <h1 className="default-title"></h1>
            <div className="default-table-container">
                <table className="default-table-inner">
                    <thead className="default-table-head">
                        <tr className="default-table-row">
                            <th scope="col" className="default-th">
                                #
                            </th>
                            <th scope="col" className="default-th">
                                عنوان
                            </th>
                            <th scope="col" className="default-th">
                                وضعیت
                            </th>
                            <th scope="col" className="default-th">
                                عملیات
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(counter)].map((_, index) => (
                            <tr key={index} className="default-tr">
                                <th scope="row" className="default-td-index">
                                    {index + 1}
                                </th>
                                <td className="default-td">
                                    دسته شماره {index + 1}
                                </td>
                                <td className="default-td">پایان یافت</td>
                                <td className="default-td-action">
                                    <a href="#" className="default-action-link">
                                        حذف
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CategoryTable;
