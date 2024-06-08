import React from "react";
import { assets } from "../../assets/assets";

function Download() {
  return (
    <div className="download-container" id="mobileapp">
      <h1>For Better Experiance Download<br></br> Tomato App</h1>
      <div className="download-btn">
        <a href="">
          <img src={assets.play_store} />
        </a>
        <a href="">
          <img src={assets.app_store} />
        </a>
  </div>
    </div>
  );
}

export default Download;
