/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import SmallHappiness from "./assets/SmallHappiness.png";

const Mobile = () => {
  return (
    <div className="p-4">
      <div className="rounded-3xl bg-[#FFE3D3]">
        <div className="p-4 flex gap-2 justify-between">
          <span className="heading1">Zen Meditation</span>
          <span className="typography py-1 px-2">20 min</span>
        </div>
        <div className="px-8 pb-4 pt-2.5">
          <img srcSet={`${SmallHappiness}`} alt="image" />
        </div>
      </div>

      <div className=""></div>
    </div>
  );
};

export default Mobile;
