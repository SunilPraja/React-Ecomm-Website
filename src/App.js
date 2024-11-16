import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Products from "./Products";
import Contact from "./Contact";
import SingalProduct from "./SingleProduct";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";


const App = () => {
  return <div>
    <Router>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/products"  element={<Products/>}/>
        <Route path="/contact"  element={<Contact/>}/>
        <Route path="/singleproduct/:id"  element={<SingalProduct/>}/>
        <Route path="/cart"  element={<Cart/>}/>
        <Route path="/*"  element={<ErrorPage/>}/>
      </Routes>
    </Router>

  </div>;
};

export default App;
