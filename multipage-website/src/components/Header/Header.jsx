import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="bg-slate-500 h-1/5 flex items-center px-8 text-white text-3xl justify-around dark:bg-black">
        <div className="">Aditya Bansal</div>
        <div className="">
          <NavLink
            exact
            to="/"
            className={({ isActive }) =>
              `mx-4 ${isActive ? "text-orange-500" : "text-white"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/time"
            className={({ isActive }) =>
              `mx-4 ${isActive ? "text-orange-500" : "text-white"}`
            }
          >
            Time
          </NavLink>
          <NavLink
            exact
            to="/Github"
            className={({ isActive }) =>
              `mx-4 ${isActive ? "text-orange-500" : "text-white"}`
            }
          >
            Github API
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
