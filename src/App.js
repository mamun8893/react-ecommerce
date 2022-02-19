import React, { lazy, Suspense } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AuthProvider from "./context/AuthProvider";
import Spinner from "./components/Spinner/Spinner";

const Home = lazy(() => import("./pages/Home/Home"));
const Shop = lazy(() => import("./pages/Shop/Shop"));
const Auth = lazy(() => import("./pages/Auth/Auth"));
const Checkout = lazy(() => import("./components/Checkout/Checkout"));
const Collection = lazy(() => import("./pages/Collection/Collection"));

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<Home />}></Route>

              <Route path="shop" element={<Shop />}>
                <Route path=":collectionName" element={<Collection />} />
              </Route>
              <Route path="signup" element={<Auth />}></Route>
              <Route path="checkout" element={<Checkout />}></Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
