import React from "react";

// internal import
import Style from "./Error.module.css";

const Error = ({error}) => {
  return (
  <div className={Style.Error}>
    <div className={Style.Error_box}>
      <h1>Please fix this error & reload browser</h1>
      {error}
    </div>
  </div>
  );
};

export default Error