import React from 'react';
import { Route, Routes } from "react-router-dom";
import Cart from './screens/Home/Cart';
import Home from './screens/Home/Home';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default Router
