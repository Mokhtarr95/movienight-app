import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <span className="Header" onClick={() => window.scroll(0, 0)}>
      {" "}
      MOVIE NIGHT{" "}
    </span>
  );
};

export default Header;
