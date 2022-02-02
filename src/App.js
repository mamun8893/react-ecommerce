import React from "react";
import "./App.scss";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hats from "./components/Hats/Hats";
import Shop from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import Auth from "./pages/Auth/Auth";
import AuthProvider from "./context/AuthProvider";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/hats" element={<Hats />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/signup" element={<Auth />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
