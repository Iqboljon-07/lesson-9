import React, { memo, useEffect } from "react";
import "./home.css";
import shapes from "../../assets/Shapes.svg";
import Header from "../../assets/Header Image.svg";
import Title from "../../assets/Title Wrapper.svg";
import rasm1 from "../../assets/1.svg";
import rasm2 from "../../assets/2.svg";

import rasm3 from "../../assets/3.svg";
import rasm4 from "../../assets/4.svg";
import rasm5 from "../../assets/5.svg";
import { Bottom, Button } from "./style";
import { GoArrowRight } from "react-icons/go";

const Home = () => {
  return (
    <div className="home">
      <div className="home_1">
        <div className="home_2">
          <h1>Transform Your Idea Into Reality with Finsweet</h1>
          <p>
            The entire Finsweet team knows what's good with Webflow and
            <br />
            you can too with 1 week and a good attitude.
          </p>
          <Button>
            <img
              style={{ position: "relative", top: "-15px", right: "0" }}
              src={shapes}
              alt=""
            />
            Request Quote <GoArrowRight />
          </Button>
        </div>
        <img className="img_Header" src={Header} alt="" />
      </div>

      <div className="bottom">
        <Bottom>
          <img src={Title} alt="" />
          <div className="bottom_1">
            <img src={rasm1} alt="" />
            <img src={rasm2} alt="" />
            <img src={rasm3} alt="" />
            <img src={rasm4} alt="" />
            <img src={rasm5} alt="" />
          </div>
        </Bottom>
      </div>
    </div>
  );
};

export default memo(Home);
