import React, { useContext } from "react";
import { Storecontext } from "../../context/Storecontext";
import { assets } from "../../assets/assets";
import "./cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { food_list, cartItems, removeFromcart, addTocart, getTotalamout } =
    useContext(Storecontext);
  const navigate = useNavigate();
  return (
    <>
      <br />
      <br />
      <div className="cart-table">
        <div className="table-heading">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className="hr1" />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="cart-item" key={item._id}>
                <img src={item.image} />
                <p style={{ marginLeft: "-26px" }}>{item.name}</p>
                <p style={{ marginLeft: "-20px" }}>${item.price}</p>
                <p style={{ marginLeft: "-19px" }} className="qty">
                  {cartItems[item._id]}
                </p>
                <p style={{ marginLeft: "-26px" }} className="totalitem">
                  $ {item.price * cartItems[item._id]}
                </p>
                <p
                  style={{ marginLeft: "-35px" }}
                  className="cross"
                  onClick={() => removeFromcart(item._id)}
                >
                  x
                </p>
                <hr className="hr2" />
              </div>
            );
          }
        })}
      </div>

      <div className="cart-footer">
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
                PROCEED TO CHECKOUT
              </button>
              <br />
            </div>
          </div>
        </div>
        <div className="promo">
          <p>If you have a promo code, enter it here</p>
          <input type="text" placeholder="Promo code" />
          <button>Submit</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
