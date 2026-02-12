import React from "react";
import { NavLink } from "react-router";

function NavBar() {
  return (
    <div className="bg-lime-200 h-12 px-8 flex justify-center items-center shadow-md">
      <div className="flex gap-10 font-semibold">
        <NavLink to="/" className="hover:text-gray-400">
          Home
        </NavLink>
        <NavLink to="register" className="hover:text-gray-400">
          Register
        </NavLink>
        <NavLink to="post" className="hover:text-gray-400">
          Post
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
