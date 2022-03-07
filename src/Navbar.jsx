import React, { useState } from "react";
import logo from "./assets/Logo.png";
import IconWifi from "./assets/Wifi.svg";
import IconBattery from "./assets/Battery.svg";
import IconCellularConnection from "./assets/Cellular Connection.svg";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Navbar = () => {
  const [dark, setDark] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between pl-6 pr-4">
        <div className="font-semibold">9:14</div>
        <div className="flex gap-1.5">
          <div className="">
            <img src={IconCellularConnection} alt="icon cellular connection" />
          </div>
          <div className="">
            <img src={IconWifi} alt="icon wifi" />
          </div>
          <div className="">
            <img src={IconBattery} alt="icon battery" />
          </div>
        </div>
      </div>

      <div className="p-4 flex justify-between">
        <div className="flex gap-4">
          <div className="">
            <img srcSet={`${logo} 2x`} alt="logo" />
          </div>
          <div className="flex items-center heading">
            <span>Hi, Martha</span>
          </div>
        </div>
        <div className="flex items-center">
          <button className="delay-300" onClick={() => setDark(!dark)}>
            {dark ? (
              <BsFillMoonStarsFill className="w-6 h-6" />
            ) : (
              <BsFillSunFill className="w-6 h-6 text-yellow-500" />
            )}
          </button>
        </div>
      </div>

      <div className="pl-4">
        <ul className="flex">
          <li className="py-2 px-4 body1">Sleep</li>
          <li className="py-2 px-4 body1">Inner Peace</li>
          <li className="py-2 px-4 body1">Stress</li>
          <li className="py-2 px-4 body1">Anxiety</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
