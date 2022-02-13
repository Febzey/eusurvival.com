import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/index.css';
import Home from './pages/Home';
import NavBar from './components/Nav/NavBar';
import StaffPage from './pages/Staff';
import Footer from './components/Footer/Footer';
import Rules from './pages/Rules';
import Vote from './pages/Vote';
import Faq from './pages/Faq';


ReactDOM.render(
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/rules" element={<Rules/>}/>
      <Route path="/vote" element={<Vote/>}/>
      <Route path="/faq" element={<Faq/>}/>
      <Route path="/staff" element={<StaffPage/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>,
  document.getElementById('root')
);