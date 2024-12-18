import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

import Company from "./pages/company/Company";
import Service from "./pages/service/Service";
import Career from "./pages/career/Career";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />}></Route>
        <Route path="/company" element={<Company />}></Route>
        <Route path="/career" element={<Career />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
