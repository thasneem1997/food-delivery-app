import React, { useState } from "react";
import Header from "./Header";
import Exploremenu from "./Exploremenu";
import Fooddisplay from "./food display/Fooddisplay";
import Footer from "./Footer";
import Download from "./Download";

function Home() {
  const [category, subcategory] = useState("All");
  return (
    <div>
      <Header />
      <Exploremenu category={category} subcategory={subcategory} />
      <Fooddisplay category={category} /><br/><br/>
      <Download/>
     
    </div>
  );
}

export default Home;
