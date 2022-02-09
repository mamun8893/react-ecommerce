import React from "react";
import "./App.scss";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import Auth from "./pages/Auth/Auth";
import AuthProvider from "./context/AuthProvider";
import Checkout from "./components/Checkout/Checkout";
import Collection from "./pages/Collection/Collection";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="shop" element={<Shop />}>
              <Route path=":collectionName" element={<Collection />} />
            </Route>
            <Route path="signup" element={<Auth />}></Route>
            <Route path="checkout" element={<Checkout />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
