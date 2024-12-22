import { request } from "@/api";
import Products from "@/pages/products/Products";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Modal = () => {
  const [data, setData] = useState(null);
  //   const params = useParams();
  //   console.log(params);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    request(`./products/${id}`).then((res) => setData(res.data)); //Object qaytaradi shuning uchun map lash shrt emas
  }, []);
  console.log(data);

  return (
    <>
      <Products />
      <div
        onClick={() => navigate("/products")}
        className=" modal_overlay"
      ></div>
      <div className="modal_content">
        <button onClick={() => navigate("/products")}>Cancel</button>

        <h1>{data?.title} </h1>
        <img
          style={{ width: "400px", height: "300px" }}
          onClick={() => navigate(`/product/${data.id}`)}
          src={data?.thumbnail}
          alt=""
        />
      </div>
    </>
  );
};

export default Modal;
// onClick={() => navigate(`/product/${product.id}`)}
