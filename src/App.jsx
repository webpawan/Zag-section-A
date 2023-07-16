import React from "react";
import Home from "./pages/Home/Home";
import Detail from "./pages/detail/Detail";

import Cart from "./pages/cart/Cart";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/id:123" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* <Cart /> */}
    </>
  );
};

export default App;
