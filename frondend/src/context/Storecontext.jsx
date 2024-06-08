import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
import { useEffect } from "react";

export const Storecontext = createContext(null);
const StorecontextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const addTocart = (itemid) => {
    if (!cartItems[itemid]) {
      //if value not avialable in cart
      setCartItems((prev) => ({ ...prev, [itemid]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    }
  };
  const removeFromcart = (itemid) => {
    setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };
  const getTotalamout = () => {
    let totalamount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let iteminfo = food_list.find((product) => product._id === item);
        totalamount+=iteminfo.price * cartItems[item];
      }
    }
    return totalamount;
  };
  const contextValue = {
    food_list,
    cartItems,
    removeFromcart,
    addTocart,
    getTotalamout
  };
  return (
    <Storecontext.Provider value={contextValue}>
      {children}
    </Storecontext.Provider>
  );
};
export default StorecontextProvider;
