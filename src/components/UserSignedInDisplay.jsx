import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "@reach/router";

export default function UserSignedInDisplay({ user, handleLogoutClick, show, toggleModal }) {
  const { username } = user;
  return (
    <Modal show={show} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title id="signed-in-text">Signed in as: {username}</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button className="logout-button" onClick={handleLogoutClick}>
          <span onClick={toggleModal}>Log Out</span>
        </Button>
        <Link to={`/account/${username}`}>
          <Button className="account-button">
            <span onClick={toggleModal}>My Account</span>
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}
