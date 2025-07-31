import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from "./components/Main/MainPage";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";

const App: React.FC = () => {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<MainPage/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default App;

