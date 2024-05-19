import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './components/pages/Home.js';
import Admin from './components/pages/Admin.js';

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
