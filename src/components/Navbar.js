import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <NavLink
        activeStyle={{
          color: "red",
          fontWeight: "bold",
        }}
        exact={true}
        to="/discover"
      >
        Discover movies
      </NavLink>
      <NavLink
        activeStyle={{
          color: "red",
          fontWeight: "bold",
        }}
        exact={true}
        to="/about"
      >
        About this website
      </NavLink>
      <NavLink
        activeStyle={{
          color: "red",
          fontWeight: "bold",
        }}
        exact={true}
        to="/"
      >
        HomePage
      </NavLink>
    </div>
  );
}
