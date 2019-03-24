import React from "react";
import UserDropdown from "./UserDropdown";
import { Link } from "@reach/router";
import "../css/LoginDashBoard.css";
import Modal from "react-bootstrap/Modal";

export default function LoginDashBoard({ handleSignInUser, users, show, toggleModal }) {
  return (
    <Modal show={show} onHide={toggleModal}>
      <Modal.Header closeButton>
        {" "}
        <Modal.Title id="login-text">Login: </Modal.Title>{" "}
      </Modal.Header>{" "}
      <Modal.Body>
        <UserDropdown
          id="dash-dropdown"
          handleSignInUser={handleSignInUser}
          users={users}
          toggleModal={toggleModal}
        />
        <br />
        <Link className="create-account-link" to="/login">
          <span onClick={toggleModal}>Or Create Account</span>
        </Link>
      </Modal.Body>
    </Modal>
  );
}
