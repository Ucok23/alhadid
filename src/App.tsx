import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import { FullSurah } from './components/full/full';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ComingSoon } from './components/tema/tema';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<ComingSoon />} />
          <Route path='/full' element={<FullSurah />} />
          <Route path='/tema' element={<ComingSoon />} />
          <Route path='/profile' element={<ComingSoon />} />
        </Routes>
      </BrowserRouter>
    </>
  );  
}

export default App;