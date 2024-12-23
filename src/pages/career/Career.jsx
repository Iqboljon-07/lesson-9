import React, { memo } from "react";
import "./career.css";
import { H1, H3, P } from "../styles/styles";
import rasm12 from "../../assets/12.svg";
import image from "../../assets/Image.svg";
import { TbHandFingerDown } from "react-icons/tb";
const Career = () => {
  return (
    <div className="career">
      <div className="career_1">
        <div className="career_activ">
          <div className="career_3">
            <div className="career_2">
              <H3>CAREER AT FINSWEET</H3>
              <img src={rasm12} alt="" />
            </div>
          </div>
          <H1
            style={{
              width: "624px",
              textAlign: "center",

              textWrap: "wrap",
            }}
          >
            We hired people who are Always Passionate about <br /> what they do
          </H1>
          <P style={{ width: "628px", textAlign: "center" }}>
            Through True Rich Attended does no end it his mother since real had
            half <br /> every him case in packages enquire we up ecstatic
            unsatiable saw .
          </P>
        </div>
        <img src={image} alt="" />
        <div className="career_bottom ">
          <p>See Our open positions</p>
          <TbHandFingerDown />
        </div>
      </div>
    </div>
  );
};

export default memo(Career);
