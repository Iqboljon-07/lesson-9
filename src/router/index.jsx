import Career from "@/pages/career/Career";
import Company from "@/pages/company/Company";
import Detail from "@/pages/detail/Detail";
import Home from "@/pages/home/Home";

import Layout from "@/pages/layout/Layout";
import Login from "@/pages/login/Login";
import NotFound from "@/pages/notfound/NotFound";
import Products from "@/pages/products/Products";
import Service from "@/pages/service/Service";
import React from "react";
import { Route, Routes } from "react-router-dom";

const Routers = () => {
  console.log(import.meta.env.VITE_AGE);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/company" element={<Company />} />
          <Route path="/career" element={<Career />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Detail />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
};

export default Routers;
