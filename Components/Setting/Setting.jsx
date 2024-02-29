import React from "react";
import Image from "next/image";

// internal import
import Style from "./setting.module.css";
import images from "../../assets";

const Setting = () => {
    return( 
        <div className={Style.main}>Account Settings
        <div className={Style.flexcontainer}>
            <div className={Style.flexitemleft}>See Transaction History</div>
            <div className={Style.flexitemright}>Change name</div>
            <div className={Style.flexitemleft}>Friends Requests</div>
            <div className={Style.flexitemright}>Message Settings</div>
        </div>
        </div>
    );
};

export default Setting;