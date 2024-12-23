import React, { memo } from "react";
import "./notfound.css";
import rasm404 from "@/assets/404.png";
import photo404 from "@/assets/error.gif";

function NotFound() {
  return (
    <div>
      <img className="not404" src={photo404} alt="" />
    </div>
  );
}

export default memo(NotFound);
