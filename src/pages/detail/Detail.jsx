import { request } from "@/api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./detail.css";
import { H1 } from "../styles/styles";
function Detail() {
  const [data, setData] = useState(null);
  //   const params = useParams();
  //   console.log(params);
  const { id } = useParams();

  useEffect(() => {
    request(`./products/${id}`).then((res) => setData(res.data)); //Object qaytaradi shuning uchun map lash shrt emas
  }, []);
  console.log(data);

  return (
    <>
      <div className="detail">
        <div className="detail_item">
          <div className="detail_item2">
            {data?.images?.map((img) => (
              <img src={img} alt="" />
            ))}
          </div>

          <div className="detail_item1">
            <img src={data?.thumbnail} alt="" />
            <h1 style={{ fontWeight: "bold" }}> {data?.title} </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
