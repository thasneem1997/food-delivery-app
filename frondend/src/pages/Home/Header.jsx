import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
        <h1>
          Order your
          <br /> Favourite Food here
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iste<br/>
          consequatur animi quia recusandae quod, laborum nam eligendi ipsum
          commodi .
        </p>
        <button className="header-btn">View Menu</button>
      </div>
    </div>
  );
}

export default Header;
