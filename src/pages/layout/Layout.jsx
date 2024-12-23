import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React, { memo } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default memo(Layout);
