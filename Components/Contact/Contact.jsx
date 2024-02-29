import React from "react";
import Image from "next/image";

// internal import
import Style from "./Contact.module.css";
import images from "../../assets";
import Link from "next/link";

const Contact = () => {
    return(
        <div className={Style.UserCard}>
        <div className={Style.UserCard_box1}>
          <Image 
            className={Style.UserCard_box_img}
            src={images.image10}
            alt="blockchain developer"
            width={200}
            height={200}
          />
  
          <div className={Style.UserCard_box_info}>
            <h3>Asmita Thapa</h3>
            <p>Hello there! I am a smartcontract developer. Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Donec mi dolor, feugiat nec nulla vitae, 
                suscipit molestie libero. Donec rhoncus libero ac tortor elementum iaculis. 
                Quisque pellentesque auctor enim ac blandit.
            </p>
            <Link href="https://www.linkedin.com/in/asmitathapa429/" className={Style.Link}>
              Connect on linkedin
            </Link>
          </div>
        </div>
        
        <div className={Style.UserCard_box2}>
          <Image 
            className={Style.UserCard_box_img}
            src={images.image8}
            alt="front-end developer"
            width={200}
            height={200}
          />
  
          <div className={Style.UserCard_box_info}>
            <h3>Prajita Sharma</h3>
            <p>Hello All! I am a front-end developer. Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Donec mi dolor, feugiat nec nulla vitae, 
                suscipit molestie libero. Donec rhoncus libero ac tortor elementum iaculis. 
                Quisque pellentesque auctor enim ac blandit.
            </p>
            <Link href="https://www.linkedin.com/in/prajitasharma21/" className={Style.Link}>
              Connect on linkedin
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Contact;