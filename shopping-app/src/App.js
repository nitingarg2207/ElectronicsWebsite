import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from './components/Signup'
import Login from './components/Login';
import About from './components/About';
import Products from './components/Products';
import Footer from './components/Footer';
import Contact from './components/Contact';
import QNA from './components/QNA/QNA';
import Product from './components/Product';

function App() {
  const a=1;
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/products" element={<Product/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/register" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/qna" element={<h1><QNA/></h1>} />
      </Routes>
      <Footer key={a}/>
    </BrowserRouter>
  );
}

export default App;
