import React from "react";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <div className="footer" id="contact">
      <div className="content-left">
        <img src={assets.logo} className="footerlogo" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vel
          tenetur eum aliquid cupiditat sed eveniet natus e natus!
        </p>
        <div className="social">
          <img src={assets.linkedin_icon} />
          <img src={assets.facebook_icon} />
          <img src={assets.twitter_icon} />
        </div>
      </div>
      <div className="content-middle">
        <h1>COMPANY</h1>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="content-right">
        <h1>GET IN TOUCH</h1>
        <ul>
          <li>+1234455</li>
          <li>Contact@tomato.com</li>
        </ul>
      </div>
      <hr className="hr" />
      <div className="middle">
        <p>Copyright © 2024 tomato.com. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
