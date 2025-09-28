import React, { useEffect } from "react";
import "./dashboard.css";
import ChartAreaDefault from "@/components/shadcn/Chart";
function Dashboard() {
    useEffect(() => {
        let items = document.querySelectorAll(".dashbaord-top-items");
        items.forEach((item) => {
            item.onmousemove = (e) => {
                const rect = item.getBoundingClientRect();
                console.log(e);
                console.log(rect);
                let x = e.clientX - rect.left;
                let y = e.clientY - rect.top;

                item.style.setProperty("--x", `${x}px`);
                item.style.setProperty("--y", `${y}px`);
            };
        });
    });

    return (
        <main className="content">
            <div className="dashbaord-top-items">
                <div className="top-item-top">
                    <div className="dashboard-item-info">
                        <h3>سبد خرید امروز </h3>
                        <div className="dashboard-total">
                            <h2 id="cart-today">14</h2>
                        </div>
                    </div>
                    <i className="bx bxs-basket"></i>
                </div>
                <div className="top-item-bottom">
                    <div className="dashboard-last">
                        <h4>13</h4>
                        <small>در هفته پیش</small>
                    </div>
                    <div className="dashboard-last">
                        <h4>23</h4>
                        <small>در ماه پیش</small>
                    </div>
                </div>
            </div>

            <div className="dashbaord-top-items">
                <div className="top-item-top">
                    <div className="dashboard-item-info">
                        <h3>سفارشات امروز</h3>
                        <div className="dashboard-total">
                            <h2>45</h2>
                            <small></small>
                        </div>
                    </div>
                    <i className="bx bxs-package"></i>
                </div>
                <div className="top-item-bottom">
                    <div className="dashboard-last">
                        <h4>13</h4>
                        <small>در هفته پیش</small>
                    </div>
                    <div className="dashboard-last">
                        <h4>13</h4>
                        <small>در ماه پیش</small>
                    </div>
                </div>
            </div>

            <div className="dashbaord-top-items">
                <div className="top-item-top">
                    <div className="dashboard-item-info">
                        <h3>سفارشات مانده امروز </h3>
                        <div className="dashboard-total">
                            <h2 id="order-remaing-today">5</h2>
                            <small></small>
                        </div>
                    </div>
                    <i className="bx bx-package"></i>
                </div>
                <div className="top-item-bottom">
                    <div className="dashboard-last">
                        <h4>6</h4>
                        <small>در هفته پیش</small>
                    </div>
                    <div className="dashboard-last">
                        <h4>22</h4>
                        <small>در ماه پیش</small>
                    </div>
                </div>
            </div>
            <div className="dashbaord-top-items">
                <div className="top-item-top">
                    <div className="dashboard-item-info">
                        <h3>درآمد امروز</h3>
                        <div className="dashboard-total">
                            <h2>10100100100</h2>
                            <small> تومان </small>
                        </div>
                    </div>
                    <i className="bx bxs-basket"></i>
                </div>
                <div className="top-item-bottom">
                    <div className="dashboard-last">
                        <h4>13</h4>
                        <small>در هفته پیش</small>
                    </div>
                    <div className="dashboard-last">
                        <h4>13</h4>
                        <small>در ماه پیش</small>
                    </div>
                </div>
            </div>

            <div className="dashboard-table">
                <h1 className="">محصولات رو به اتمام</h1>
                <div class="relative  shadow-md rounded-lg ">
                    <table class="w-full text-sm text-left  rounded-lg rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 rounded-lg uppercase  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr className=" rounded-lg">
                                <th scope="col" class="px-6 py-3">
                                    #
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    دسته
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    عنوان
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    وضعیت
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    عمیلات
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    1
                                </th>
                                <td class="px-6 py-4 text-nowrap">
                                    دسته شماره فلان
                                </td>
                                <td class="px-6 py-4 text-nowrap ">
                                    محصول فلان
                                </td>
                                <td class="px-6 py-4 text-nowrap">
                                    پایان یافت
                                </td>
                                <td class="px-6 py-4 text-nowrap text-right">
                                    <a
                                        href="#"
                                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="dashboard-chart">
                <ChartAreaDefault />
            </div>
        </main>
    );
}

export default Dashboard;
