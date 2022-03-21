// import { useEffect, useState } from "react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ConfirmationModal = ({
  buttonText,
  variant,
  action,
  accept,
  buttonState,
  buttonAction,
  listWasModified,
  listModifiedHandler,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    console.log(`show confirmation modal => ${show}`);
  };

  const handleShow = () => {
    setShow(true);
    console.log(`show confirmation modal=> ${show}`);
  };

  const onAccept = () => {
    handleClose();
    buttonAction();
    listModifiedHandler(listWasModified);
  };

  return (
    <>
      <Button variant={variant} onClick={handleShow} disabled={buttonState}>
        {buttonText}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Caution</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to {action}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onAccept}>
            {accept}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmationModal;
