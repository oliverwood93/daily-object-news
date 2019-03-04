import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "@reach/router";
import './SideMenu.css'

function SideMenu() {
  return (
    <Menu>
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/login">Sign-In / Create Account</Link>
    </Menu>
  );
}

export default SideMenu;
