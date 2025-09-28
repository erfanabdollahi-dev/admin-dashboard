import React from "react";
import profileimg from "../../../assets/doge.png";

const Info = () => {
    return (
        <>
            <div className="item-info ">
                <div className="sidebar-profile">
                    <img
                        src={profileimg}
                        alt=""
                        className="sidebar-profile-img"
                    />
                </div>
                <div className="sidebar-info-info ">
                    <h1 className="sidebar-info-name  ">عرفان عبداللهی</h1>
                    <p className="sidebar-info-email ">erfan@gamil.com</p>
                </div>
                <i className="bx bx-log-out text-failed-color text-2xl cursor-pointer"></i>
            </div>
            <div className="dashed"></div>
        </>
    );
};

export default Info;
