import React from 'react'
import { Modal } from 'react-bootstrap';



const OTPModal = ({ show, onClose, onLogout }) => {
    return (
        <>
            <Modal show={show} onHide={onClose} centered >
                <Modal.Header className='border-0 mt-4 d-flex justify-content-center'>
                    <Modal.Title className='fw-bold ' style={{ color: "#064FB8" }}>Enter Code</Modal.Title>
                </Modal.Header>
                <Modal.Body className=' text-center border-0'>Enter the 4-digit verification sent to +987654233445
                <div className="otp-inputs d-flex gap-2 rounded mt-4">
                    <input type="password" maxLength="1" className="form-control rounded-4" />
                    <input type="password" maxLength="1" className="form-control rounded-4" />
                    <input type="password" maxLength="1" className="form-control rounded-4" />
                    <input type="password" maxLength="1" className="form-control rounded-4" />
                </div>
                <p className='fs-5 mt-4 text-center'>Resend code in <a href=' ' className='text-decoration-none'>43</a> second</p>
               

                    <div className="d-grid gap-2 mt-5 mb-5">
                        <button className="btn btn-primary btn-lg" onClick={onClose} type="button" style={{ backgroundColor: "#064FB8" }}>Continue</button>
                    </div>
                    </Modal.Body>
            </Modal>
        </>
    )
}

export default OTPModal
