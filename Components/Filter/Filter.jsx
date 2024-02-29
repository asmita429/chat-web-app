import React, { useState, useContext} from "react";
import Image from "next/image";

// internal import
import Style from "./Filter.module.css";
import images from "../../assets";
import { ChatAppContect } from "../../Context/ChatAppContext";
import { Model } from "../index";

const Filter = () => {
  const {account, addFriends } = useContext(ChatAppContect);
  // usestate
  const [addFriend, setAddFriend] = useState(false);
  return (
    <div className={Style.Filter}>
      <div className={Style.Filter_box}>
        <div className={Style.Filter_box_left}>
          <div className={Style.Filter_box_left_search}>
            <Image src={images.search} alt="image" width={20} height={20} />
            <input type="text" placeholder="search..." />
          </div>
        </div>
        <div className={Style.Filter_box_right}>
          <button>
            <Image src={images.clear} alt="clear" width={20} height={20} />
            CLEAR CHAT
          </button>
          <button onClick={() => setAddFriend(true)}>
            <Image src={images.user} alt="clear" width={20} height={20} />
            ADD FRIEND
          </button>
        </div>
      </div>

      {/* model component */}
      {addFriend && (
        <div className={Style.Filter_model}>
          <Model 
            openBox={setAddFriend} 
            title="WELCOME TO"
            head ="CHAT APP"
            info ="Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Assumenda facere accusantium 
            aliquid, ab qui in excepturi quam iusto quis 
            laudantium vero repellat eum rem praesentium 
            amet repellendus recusandae, minima exercitationem." 
            smallInfo="Kindly select your friend name & address.."
            image={images.hero}
            functionName={addFriends}/>
        </div>
      )}
    </div>
  );
};

export default Filter;