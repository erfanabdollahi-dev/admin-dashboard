import React from "react";

const Table = () => {
    return (
        <div className="dashboard-table">
            <h1 className="">محصولات رو به اتمام</h1>
            <div className="relative  shadow-md rounded-lg ">
                <table className="w-full text-sm text-left  rounded-lg rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 rounded-lg uppercase  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className=" rounded-lg">
                            <th scope="col" className="px-6 py-3">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3">
                                دسته
                            </th>
                            <th scope="col" className="px-6 py-3">
                                عنوان
                            </th>
                            <th scope="col" className="px-6 py-3">
                                وضعیت
                            </th>
                            <th scope="col" className="px-6 py-3">
                                عمیلات
                            </th>
                        </tr>
                    </thead>
                    <tbody>




                        
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                1
                            </th>
                            <td className="px-6 py-4 text-nowrap">
                                دسته شماره فلان
                            </td>
                            <td className="px-6 py-4 text-nowrap ">محصول فلان</td>
                            <td className="px-6 py-4 text-nowrap">پایان یافت</td>
                            <td className="px-6 py-4 text-nowrap text-right">
                                <a
                                    href="#"
                                    className="font-medium text-failed-color hover:underline"
                                >
                                    حذف
                                </a>
                            </td>
                        </tr>






                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default Table