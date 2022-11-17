import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useApi from "./hooks/useApi";
import CategoryDetail from "./pages/category/CategoryDetail";
import Home from "./pages/home/Home";
import React from "react";
import Login from "./pages/Login";
import { connect } from "react-redux";
import ProductDetail from "./pages/category/ProductDetail";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Register from "./pages/Register";

function App(props) {
  console.log("APPPROPS::", props);
  const api = useApi();

  api
    .get("shop/countries")
    .then((response) => {
      console.log("RESPONSEDATA::>", response);
    })
    .catch((err) => {
      console.log("ERRDATA::", err);
    });
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/category">
            <Route path=":categoryCode" element={<CategoryDetail />} />
          </Route>
          <Route path="/product">
            <Route path=":productCode" element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
      ,
      <Footer />
    </React.Fragment>
  );
}

const maptoProps = (state) => {
  return { ...state };
};

export default connect(maptoProps)(App);
