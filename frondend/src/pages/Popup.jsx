import React, { useState } from "react";
import { assets } from "../assets/assets";
import "./Home/Popup.css";

function Popup({ setshowlogin }) {
  const [currentpopup, setcurrentpopup] = useState("login");
  return (
    <>
      <div className="popup">
        <div className="popup-container">
          <div className="popup-head">
            <h1>{currentpopup}</h1>
            <img src={assets.cross_icon} onClick={() => setshowlogin(false)} />
          </div>
          <br />
          <div className="popup-body">
            <form className="form-container">
              {currentpopup === "signup" ? (
                <input type="text" placeholder=" Your Name" />
              ) : (
                <></>
              )}
              <input type="text" placeholder="Your email" />
              <input type="password" placeholder="Your password" />
              <button>
                {currentpopup === "login" ? "login" : "create account"}
              </button>
              <br />
              <div className="form-footer">
                <input type="checkbox"></input>
                <p>
                  {" "}
                  By continuing ,i agree to the terms of use and privacy policy
                </p>
              </div>
            </form>
            <br />

            {currentpopup === "signup" ? (
              <p className="para">
                Already have an account{" "}
                <span onClick={() => setcurrentpopup("login")}>Login here</span>
              </p>
            ) : (
              <p className="para">
                Create a new account?{" "}
                <span onClick={() => setcurrentpopup("signup")}>
                  Click here
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;
