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
        <Route path="/detail" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1>error page </h1>} />
      </Routes>
    </>
  );
};

export default App;
