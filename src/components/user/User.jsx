import React, { memo } from "react";

const User = () => {
  return (
    <div className="user">
      <div>
        <h1>Login</h1>
      </div>
      <input type="text" placeholder="login" />
      <input type="text" placeholder="password" />
      <button>Submit</button>
    </div>
  );
};

export default memo(User);
