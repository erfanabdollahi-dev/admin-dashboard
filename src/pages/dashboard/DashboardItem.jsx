import React from "react";



const DashboardItem = ({icon,title,today,lastW,lastM,id=null,money=false}) => {
  return(
      <div className="dashbaord-top-items">
        <div className="top-item-top">
            <div className="dashboard-item-info">
                <h3>{title}</h3>
                
                <div className="dashboard-total">
                    <h2 id={id ? id : null}>{today}</h2>
                    {money ? (<small>تومان</small>): null}
                </div>
            </div>
            <i className={icon}></i>
        </div>
        <div className="top-item-bottom">
            <div className="dashboard-last">
                <h4>{lastW}</h4>
                <small>در هفته پیش</small>
            </div>
            <div className="dashboard-last">
                <h4>{lastM}</h4>
                <small>در ماه پیش</small>
            </div>
        </div>
    </div>
  )
};


export default DashboardItem