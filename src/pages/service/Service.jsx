import React from "react";
import "./service.css";
import { About1, H1, H3, P } from "../styles/styles";
import { Button } from "../home/style";
import shapes from "../../assets/Shapes.svg";
import { GoArrowRight } from "react-icons/go";
const Service = () => {
  return (
    <div className="about">
      <div className="about_1">
        <About1 className="about_2">
          <H3>Our Services</H3>
          <H1>
            We Build Software Solutionthat Solve Clients Business Challenges
          </H1>
          <P>
            Through True Rich Attended does no end it his mother since
            favourable real <br /> had half every him case in packages enquire
            we up ecstatic.
          </P>
          <Button style={{ marginTop: "40px" }}>
            <img
              style={{ position: "relative", top: "-15px", right: "0" }}
              src={shapes}
              alt=""
            />
            Request Quote <GoArrowRight />
          </Button>
        </About1>
        <div className="about_3">
          <h3>Technical support</h3>
          <h3>
            Development <GoArrowRight />
          </h3>
          <h3>AWS/Azure</h3>
          <h3>Consulting</h3>
          <h3>Information Technology</h3>
        </div>
      </div>
    </div>
  );
};

export default Service;
