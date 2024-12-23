import { request } from "@/api";
import Products from "@/pages/products/Products";
import React, { Fragment, memo, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { MdOutlineInput } from "react-icons/md";

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Products />
      <div
        onClick={() => navigate("/products")}
        className=" modal_overlay"
      ></div>
      <div className="modal_content">
        <button onClick={() => navigate("/products")}>
          <MdCancel style={{ fontSize: "44px", color: "red" }} />
        </button>

        <h1>{data?.title} </h1>
        <img
          onClick={() => navigate(`/product/${data.id}`)}
          src={data?.thumbnail}
          alt=""
        />

        <p> Catagory: {data?.category} </p>
        <button onClick={() => navigate(`/product/${data.id} `)}>
          <MdOutlineInput style={{ fontSize: "40px", color: "green" }} />
        </button>
      </div>
    </>
  );
};

export default memo(Modal);
// onClick={() => navigate(`/product/${product.id}`)}
