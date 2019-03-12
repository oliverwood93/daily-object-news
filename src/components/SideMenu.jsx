import React from "react";
import { stack as Menu } from "react-burger-menu";
import { Link } from "@reach/router";
import "../css/SideMenu.css";

function SideMenu({ username, handleLogoutClick }) {
  return (
    <Menu>
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
      <Link to={`/articles/${username || 'guest'}/new_post`}>Post an Article</Link>
      {!username ? (
        <Link to="/login">Sign-In / Create Account</Link>
      ) : (
          <Link to={`/account/${username}`} >My Account</Link>
      )}
      {username && <Link to="/" ><span onClick={handleLogoutClick}>Logout</span></Link>}
    </Menu>
  );
}

export default SideMenu;
