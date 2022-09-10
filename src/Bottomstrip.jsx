import React from "react";
import bl1 from "./img/bottomlogo1.png";
import bl2 from "./img/bottomlogo2.png";
import "./bottom.css";

const Bottomstrip = () => {
  return (
    <>
      <div className="botom">
        <img src={bl1} alt="....." />
        <img src={bl2} alt="....." />
      </div>
    </>
  );
};

export default Bottomstrip;
