import React, { useContext } from "react";
import './fooditem.css'
import { assets } from "../../../assets/assets";
import { Storecontext } from "../../../context/Storecontext";

const Fooditem=({ id, name, image, description, price }) =>
{

 const{cartItems,removeFromcart,addTocart}=useContext(Storecontext);
  console.log("Cart Items: ", cartItems);
  
  return (
    <div className="fooditem-container">
      <div className="content">
        <img src={image} />
        {!cartItems[id]?<img src={assets.add_icon_white} className="addimg" onClick={()=>addTocart(id)}/>:
        <div className="cart-container">
          <img src={assets.add_icon_green} onClick={()=>addTocart(id)}/>
          <p>{cartItems[id]}</p>
          <img src={assets.remove_icon_red} onClick={()=>removeFromcart(id)}/>
        </div>
        }
        <div className="heading">
        <h2>{name}</h2>
        <img src={assets.rating_starts}/>
        </div>
       
        
        <p className="desc">{description}</p>
        <h2 className="price">${price}</h2>
      </div>
    </div>
  );
}

export default Fooditem;
