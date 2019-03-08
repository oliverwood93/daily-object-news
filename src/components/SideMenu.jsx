import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "@reach/router";
import "./SideMenu.css";

function SideMenu({ user, handleLogoutClick }) {
  return (
    <Menu>
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
      <Link to={`/articles/${user}/new_post`}>Post an Article</Link>
      {!user ? (
        <Link to="/login">Sign-In / Create Account</Link>
      ) : (
          <Link to="/" ><span onClick={handleLogoutClick}>Logout</span></Link>
      )}
    </Menu>
  );
}

export default SideMenu;
