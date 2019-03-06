import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "@reach/router";
import './SideMenu.css'

function SideMenu({user}) {
  return (
    <Menu>
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
      {user === '' ? <Link to="/login">Sign-In / Create Account</Link>
      : <Link to={`/account/${user}`}>My Account</Link>
    }
    </Menu>
  );
}

export default SideMenu;
