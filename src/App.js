import React from "react";
import "./App.scss";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hats from "./components/Hats/Hats";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/hats" element={<Hats />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
