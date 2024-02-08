import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const NonDiabeticModal = ({ onHide }) => {
    return (
        <Modal show={true} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title className="text-success">No Diabetes Detected</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="lead">
                    Great news! Based on the provided information, it appears that the person is not diabetic.
                </p>
                {/* Add any additional content */}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default NonDiabeticModal;
