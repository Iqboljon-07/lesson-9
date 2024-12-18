import React, { useState } from "react";
import "./navbar.css";
import logo1 from "../../assets/Logo (1).svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const handle = () => {
    setShow(!show);
  };

  const handle1 = () => {
    setShow1(!show1);
  };
  const handle2 = () => {
    setShow2(!show2);
  };
  const handle3 = () => {
    setShow3(!show3);
  };
  return (
    <nav>
      <div className="container">
        <img src={logo1} alt="" />

        <ul>
          <Link
            className={show ? "handle" : "handle1"}
            onClick={handle}
            to={"/"}
          >
            Home
          </Link>
          <Link
            className={show1 ? "handle" : "handle1"}
            onClick={handle1}
            to={"/service"}
          >
            Service
          </Link>
          <Link
            className={show2 ? "handle" : "handle1"}
            onClick={handle2}
            to={"/company"}
          >
            Company
          </Link>
          <Link
            className={show3 ? "handle" : "handle1"}
            onClick={handle3}
            to={"/career"}
          >
            Career
          </Link>
          <Link>Blog</Link>
          <Link>Contact us</Link>
          <Link>Clone project</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
