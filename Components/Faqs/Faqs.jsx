import React from "react";
import Image from "next/image";

// internal import
import Style from "./Faqs.module.css";
import images from "../../assets";

const Faqs = () =>{
    return (
        <div className={Style.title}>About Faqs
        <div className={Style.main}>
            <div className={Style.items}>Lorem ipsum dolor sit amet consectetur?</div>
            <div className={Style.items}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, quaerat.</div>
            <div className={Style.items}>Lorem ipsum dolor sit amet.</div>
            <div className={Style.items}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, tenetur?</div>
            <div className={Style.items}>Lorem ipsum dolor sit amet.</div>
            <div className={Style.items}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, debitis.</div>
        </div>
        </div>
    );
};

export default Faqs;