import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

/** Nav bar for vending machine to all snacks */
function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Vending Machine
      </NavLink>
      <NavLink exact to="/snack1">
        Snack One
      </NavLink>
      <NavLink exact to="/snack2">
        Snack Two
      </NavLink>
      <NavLink exact to="/snack3">
        Snack Three
      </NavLink>
    </nav>
  );
}

export default NavBar;