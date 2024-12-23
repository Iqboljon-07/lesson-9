import React, { memo } from "react";

const Registr = ({ children, close }) => {
  return (
    <>
      <div onClick={() => close(false)} className="registr"></div>
      <div className="registr_item">{children}</div>
    </>
  );
};

export default memo(Registr);
