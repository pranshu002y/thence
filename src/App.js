import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Box from "./Box";
import Footer from "./Footer";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route  path="/getproject" element={ <Box /> } />
        <Route  path="/website" element={ <Dashboard /> } />
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
