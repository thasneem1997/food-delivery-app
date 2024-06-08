import React, { useContext } from "react";
import "./Placeholder.css";
import "../Cart/cart.css";
import { useNavigate } from "react-router-dom";
import { Storecontext } from "../../context/Storecontext";

function Placeholder() {
  const { getTotalamout } = useContext(Storecontext);
  return (
    <div className="placeholder-container">
      <div className="leftside">
      <h1>Delivery information</h1>
      <br/>
        <form className="form2">
         
          <div className="col1">
            <input type="text" value="First Name" />
            <input type="text" value="Last Name" />
          </div>
          <input type="text" value="Email Address" />
          <div className="col2">
            <input type="text" value="City" />
            <input type="text" value="State" />
            <input type="text" value="Zip Code" />
            <input type="text" value="Country" />
          </div>
          <input type="text" value="Phone" />
        </form>
      </div>
      <div className="rightside">
        <div className="total">
          <h1>Cart Totals</h1>
          <br />
          <div className="total-detail">
            <div className="left">
              <h4>Subtotal</h4>
              <p>${getTotalamout()}</p>
              <hr className="hr3"></hr>

              <h4>Delivery Fee</h4>
              <p>${getTotalamout() === 0 ? "0" : "2"}</p>
              <hr className="hr3"></hr>

              <h4>
                <b>Total</b>
              </h4>
              <p>${getTotalamout() === 0 ? "0" : getTotalamout() + 2}</p>
              <br />
              <button
                className="check"
                onClick={() => navigate("/Placeholder")}
              >
                PROCEED TO PAYMENT
              </button>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Placeholder;
