import React, { useEffect, useState } from "react";
import "./products.css";
import { request } from "@/api";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
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
  console.log(data);
  if (count * ParpegeCount > 194) {
    document.querySelector("#btn").style.display = "none";
  }

  return (
    <>
      <div className="product">
        {data?.products?.map((product) => (
          <div key={product.id} className="product_item">
            <img
              onClick={() => navigate(`/product/${product.id}`)}
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
        See more{" "}
      </button>
    </>
  );
}

export default Products;
