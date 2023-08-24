import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LogoutModal = ({ show, onClose, onLogout }) => {
    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Logout Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to logout?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>No</Button>
                <Link to="/Welcome-back" variant="danger" onClick={onLogout}>Yes</Link>
            </Modal.Footer>
        </Modal>
    );
};

export default LogoutModal;
