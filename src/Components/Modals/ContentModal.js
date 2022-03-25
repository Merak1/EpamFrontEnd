// import { useEffect, useState } from "react";
import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ContentModal = ({
  buttonText,
  variant,
  title,
  content,
  action,
  accept,
  buttonState,
  buttonAction,
  listWasModified,
  listModifiedHandler,
  formId,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    console.log(`show content modal => ${show}`);
  };
  const handleShow = () => {
    setShow(true);

    console.log(`show content modal => ${show}`);
  };
  const onAccept = () => {
    // debugFunction();
    handleClose();
    buttonAction();
  };

  return (
    <>
      <Button variant={variant} onClick={handleShow} disabled={buttonState}>
        {buttonText}
      </Button>

      <Modal show={show} onHide={handleClose} className="contentModal">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <input
            type="submit"
            form={formId}
            className="btn btn-primary"
            onClick={onAccept}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContentModal;
