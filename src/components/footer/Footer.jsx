import React from "react";
import shapes from "../../assets/Shapes.svg";
import { H1 } from "../../pages/styles/styles";
import Contact from "../../assets/Contact.svg";
import logo2 from "../../assets/Logo (2).svg";
import {
  SlSocialFacebook,
  SlSocialTwitter,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";

function Footer() {
  return (
    <div className="max-w-full h-[560px] flex flex-col justify-between items-center   mt-28">
      <aside className="w-[1278px] h-[416px]  bg-white flex justify-between  ">
        <div className="w-[452px] h-[416px] flex flex-col  items-center justify-between  ">
          <div className="w-[452px] ">
            <img src={shapes} alt="" />
          </div>
          <H1 className="w-[452px]  ">
            Let's make <br /> something special
          </H1>
          <h4 className="text-2xl text-[#232536] font-semibold w-[452px]  ">
            Let's talk! 🤙
          </h4>

          <div className="text-lg font-medium  w-[452px]">
            <p>020 7993 2905</p>
            <p>hi@finsweet.com</p>
          </div>

          <p className="font-medium text-sm text-[#232536] w-[452px] ">
            DLF Cybercity, Bhubaneswar, India, &52050
          </p>
        </div>
        <div className="w-[572px] flex items-center gap-[50px] ">
          <ul className="w-[120px] h-[220px] flex flex-col  font-semibold text-base text-[#232536] ">
            <li>Home</li>
            <li>Service</li>
            <li>Company</li>
            <li>Career </li>
            <li>News</li>
          </ul>

          <ul className="w-[169px] h-[220px] text-[#232536] text-[14px] font-medium  flex flex-col justify-between">
            <li className="font-semibold text-base text-[#232536]">Service</li>
            <li> Technical support</li>
            <li>Testing</li>
            <li>Development</li>
            <li>AWS/Azure </li>
            <li>Consulting</li>
            <li>Information Technology</li>
          </ul>

          <ul className="w-[97px] h-[220px] text-[#232536] text-[14px] font-medium  flex flex-col justify-between">
            <li className="font-semibold text-base text-[#232536]">
              Resourses
            </li>
            <li> About Us</li>
            <li>Testimonial</li>
            <li>Privacy Policy</li>
            <li>Terms of use</li>
            <li>Blog</li>
          </ul>
        </div>
      </aside>
      <img
        style={{ position: "relative", bottom: "40px", left: "550px" }}
        src={Contact}
        alt=""
      />
      <div className="w-full bg-[#FFE6D2] h-[80px] py-[28px] px-[160px] ">
        <div className="w-[1280px]h-[25px]  flex items-center justify-between ">
          <div className="flex w-[283px] gap-[42px] ">
            <img src={logo2} alt="" />
            <p className="font-medium  text-base text-black ">©2021 Finsweet</p>
          </div>

          <div className="w-[144px] h-[16px]  flex justify-between">
            <SlSocialFacebook />
            <SlSocialTwitter />
            <SlSocialInstagram />
            <SlSocialLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
