import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../Components/Images/LetoSave - Logo - White.png"

const LogoutModal = ({ show, onClose, onLogout }) => {
    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header className='border-0 d-flex justify-content-center' >
                <Modal.Title><img src={logo} alt=''></img></Modal.Title>
            </Modal.Header>
            <Modal.Body className='mt-3 fw-bold text-center border-0'>Are you sure you want to logout?</Modal.Body>
            <Modal.Footer className='border-0 d-flex justify-content-center mb-4'>
            
                <Button variant="outline-secondary" className='px-5 py-2' onClick={onClose}>No</Button>
                <Link to="/Welcome-back" variant="danger" className='px-5 py-2 text-decoration-none text-white rounded' style={{backgroundColor:"#064FB8", border:"1px solid black"}} onClick={onLogout}>Yes</Link>
            </Modal.Footer>
        </Modal>
    );
};

export default LogoutModal;
