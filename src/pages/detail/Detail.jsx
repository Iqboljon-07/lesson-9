import { request } from "../../api/index";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./detail.css";
import { H1 } from "../styles/styles";
function Detail() {
  const [data, setData] = useState(null);
  const params = useParams();
  console.log(params);
  const { id } = useParams();
  console.log(useParams());
  useEffect(() => {
    request.get(`./products/${id}`).then((res) => setData(res.data)); //Object qaytaradi shuning uchun map lash shrt emas
  }, []);
  console.log(data);

  return (
    <>
      <div className="detail">
        <div className="detail_item">
          <div className="detail_item2">
            {data?.images?.map((img, ind) => (
              <Fragment key={ind}>
                <img src={img} alt="" />
              </Fragment>
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
