import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const DiabeticModal = ({ onHide }) => {
  return (
      <Modal show={true} onHide={onHide} centered>
          <Modal.Header closeButton>
              <Modal.Title style={{ color: "#d9534f" }}>Diabetic Alert</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <p className="lead" >
                  Alert! Based on the provided information, it appears that the person is diabetic.
              </p>
              {/* Add any additional content */}
          </Modal.Body>
          <Modal.Footer>
              <Button variant="danger" onClick={onHide}>
                  Close
              </Button>
          </Modal.Footer>
      </Modal>
  );
};

export default DiabeticModal;
