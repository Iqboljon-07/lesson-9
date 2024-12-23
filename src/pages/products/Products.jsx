import React, { memo, useEffect, useState } from "react";
import "./products.css";
import { request } from "@/api";
import { useNavigate } from "react-router-dom";
import Modal from "@/components/modal/Modal";
import Detail from "../detail/Detail";
import { FiLogIn } from "react-icons/fi";
import { IoIosHome } from "react-icons/io";
import Registr from "@/components/login/Registr";
import User from "@/components/user/User";

function Products() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [sana, setSana] = useState(1);
  const [user, setUser] = useState(false);

  const style = {
    display: "block",
    width: "100px",
    height: "50px",
    background: isHovered ? "red" : "blue",
    margin: "auto",
    borderRadius: "10px",
    marginTop: "15px",
    transition: "background 0.3s ease",
    color: "#fff",
  };

  let ParpegeCount = 8;

  useEffect(() => {
    request
      .get("/products", {
        params: { limit: count * ParpegeCount },
      })
      .then((res) => setData(res.data));
  }, [count]);
  // console.log(data);
  if (count * ParpegeCount > 194) {
    document.querySelector("#btn").style.display = "none";
  }

  return (
    <div className="login_control">
      <div id="btns">
        <button>
          <IoIosHome onClick={() => navigate("/")} />
        </button>
        <button onClick={() => setShow(true)}>
          <FiLogIn />
        </button>
      </div>
      <div className="product">
        {data?.products?.map((product) => (
          <div
            key={product.id}
            className={`product_item ${user === product.id ? "enter" : ""}`}
            onMouseEnter={() => setUser(product.id)}
            onMouseLeave={() => setUser(null)}
          >
            <img
              onClick={() => setShow(navigate(`/item/${product.id}`))}
              src={product.thumbnail}
              alt=""
            />

            <h1>{product.title} </h1>
          </div>
        ))}
      </div>
      <button
        id="btn"
        style={style}
        onClick={() => setCount((prev) => prev + 1)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        See more
      </button>
      {show && (
        <Registr close={setShow}>
          <User />
        </Registr>
      )}
    </div>
  );
}

export default memo(Products);

// onClick={() => navigate(`/product/${product.id}`)}
//      <div className={`sidebar ${sidebar ? "show" : ""}`}></div>
