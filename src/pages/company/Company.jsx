import React from "react";
import "./company.css";
import rasm10 from "../../assets/10.svg";
import rasm11 from "../../assets/11.svg";
import { H1, H3, P } from "../styles/styles";
import Image1 from "../../assets/Image 1.png";
import Image2 from "../../assets/Image 2.png";
import Image3 from "../../assets/Image 3.png";
const css = {
  width: "564px",
  height: "174px",
};
function Company() {
  return (
    <div className="service">
      <div className="service_item">
        <div>
          <div className="service_img">
            <img
              style={{ width: "28px", height: "28px" }}
              src={rasm10}
              alt=""
            />
            <img src={rasm11} alt="" />
          </div>
          <H3>Company</H3>
          <H1 style={css}>
            Award-winning Company seen and used by millions around the world.
          </H1>
          <P>
            It is a long established fact that a reader will be distracted by
            the readable content <br /> of a page when looking at its layout.
            The Maker is a decentralized.
          </P>
        </div>
        <div className="service_item1">
          <img src={Image1} alt="" />
          <img src={Image2} alt="" />
          <img src={Image3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Company;
