import React, { useContext } from "react";
import { Storecontext } from "../../../context/Storecontext";
import Fooditem from "../food item/Fooditem";
import "./fooddisplay.css";

function Fooddisplay({ category }) {
  const { food_list } = useContext(Storecontext);
  return (
    <div>
      <h1 className="head">Top dishes near you</h1>
      <br />
      <div className="food-container">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <Fooditem
                key={index}
                id={item._id}
                price={item.price}
                name={item.name}
                image={item.image}
                description={item.description}
                category={item.category}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Fooddisplay;
