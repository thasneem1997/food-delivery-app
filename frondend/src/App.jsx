import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Footer from "./pages/Home/Footer";
import Placeholder from "./pages/Placeholder/Placeholder";
import Home from "./pages/Home/Home";
import "./pages/Home/footer.css";
import "./pages/Home/Home.css";
import "./pages/Home/download.css";
import Popup from "./pages/Popup";

function App() {
  const [showlogin, setshowlogin] = useState(false);
  return (
    <>
      {showlogin ? <Popup setshowlogin={setshowlogin} /> : <></>}
      <div className="app">
        <Navbar setshowlogin={setshowlogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Placeholder" element={<Placeholder />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
