import React, { useEffect } from "react";
import "./dashboard.css";
import DashboardLineChart from "../../utils/LineChart";
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
                        <h3 >سبد خرید امروز </h3>
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
                            <h2 >100000000</h2>
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

            <div className="dashboard-bottom">
                <DashboardLineChart/>
            </div>
        </main>
    );
}

export default Dashboard;
