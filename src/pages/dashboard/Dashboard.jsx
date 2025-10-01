import React, { useEffect } from "react";
import "./dashboard.css";
import ChartAreaDefault from "@/components/shadcn/Chart";
import Table from "./Table";
import DashboardItem from "./DashboardItem";

const cartInfo = {
    icon: "bx bxs-basket",
    title: "سبد خرید امروز",
    today: 14,
    lastW: "33",
    lastM: "90",
    id: "cart-today",
};
const orderInfo = {
    icon: "bx bxs-package",
    title: "سفارشات امروز",
    today: 10,
    lastW: "51",
    lastM: "100",
};
const remainOrderInfo = {
    icon: "bx bx-package",
    title: "سفارشات مانده امروز",
    today: 10,
    lastW: "51",
    lastM: "100",
    id: "order-remaing-today",
};
const incomeInfo = {
    icon: "bx bx-money",
    title: " فروش امروز",
    today: 1113120,
    lastW: "51",
    lastM: "100",
    money: true,
  
};

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
        <main className="dashboard">
            <DashboardItem {...cartInfo} />
            <DashboardItem {...orderInfo} />
            <DashboardItem {...remainOrderInfo} />
            <DashboardItem {...incomeInfo} />

          

            <Table />

            <div className="dashboard-chart">
                <ChartAreaDefault />
            </div>
        </main>
    );
}

export default Dashboard;
