import React,{useState} from 'react'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Imag from "../Components/Images/logo.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../App.css"
import Upload from "../Components/Images/upload.png"
import OTPModal from '../Components/OTPModal';
import { Helmet, HelmetProvider } from 'react-helmet-async';




const RegistrationPage = () => {
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const handleLogoutClick = () => {
        setShowLogoutModal(true);
    };

    const handleLogoutClose = () => {
        setShowLogoutModal(false);
    };

    const handleLogoutConfirm = () => {
        // Perform actual logout action here
        // For example: Redirect to logout page or clear session

        // Close the modal after logout
        setShowLogoutModal(false);
    };

    return (
        <>
        <HelmetProvider>
                <Helmet>
                    <title>LetoSave | Registration-page</title>
                </Helmet>
            </HelmetProvider>
            <Container className="d-flex justify-content-center align-items-center  ">

                <div className="container ">
                    <div className="row d-flex justify-content-center align-items-center ">
                        <div className="col">
                            <div className="card card-registration py-3" style={{ borderColor: "white" }}>
                                <div className="row g-5 " >
                                    <div className="col-md-6 d-none d-md-block rounded" style={{ backgroundColor: "#064FB8" }}>
                                        <div className='h-100 d-flex flex-column align-items-center justify-content-center'>
                                            <img src={Imag} alt='LOGO' className='w-15 h-15'></img>
                                            <h1 className='text-white fw-bold' style={{ letterSpacing: "4px", fontSize: "55px" }}>LetoSave</h1>
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="card-body text-black ">
                                            <h2 className="mb-2 d-flex justify-content-center fw-bold " style={{ color: "#064FB8" }}>Get Started</h2>
                                            <div className='d-flex justify-content-center'>Already Have Account?
                                                <div className='ms-1'>
                                                    <a href='!#' className='text-decoration-none fw-medium' style={{ color: "#064FB8" }}>Sign In</a>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className=" mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example1m" className="form-control form-control-lg" placeholder='Hospital Name' />

                                                    </div>
                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                   
                                                <Form.Select size="lg">
                                                        <option>District</option>
                                                        <option value="2">Option 1</option>
                                                        <option value="3">Option 2</option>
                                                        <option value="4">Option 3</option>
                                                    </Form.Select>
                                                </div>
                                                <div className="col-md-6 mb-4">


                                                    <Form.Select size="lg">
                                                        <option>Sub-County</option>
                                                        <option value="2">Option 1</option>
                                                        <option value="3">Option 2</option>
                                                        <option value="4">Option 3</option>
                                                    </Form.Select>

                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example1m1" className="form-control form-control-lg" placeholder='Village' />

                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="password" id="form3Example1m1" className="form-control form-control-lg" placeholder='PIN Code' />

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="number" id="form3Example8" className="form-control form-control-lg" placeholder='Phone Number' />

                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="email" id="form3Example8" className="form-control form-control-lg" placeholder='Email Address' />
                                            </div>

                                            <div>
                                                <label>Upload Certification of registration</label>
                                                <div className="upload-container mb-4 mt-1 position-relative" >
                                                    <div className="upload-icon mt-3">
                                                        <img src={Upload} alt='Upload ' style={{ width: "50px", height: "50px" }}></img>
                                                    </div>
                                                    <p className="upload-text mb-1">Click to upload or drag and drop</p>
                                                    <p className=" text-dark mb-3 " style={{ color: 'black' }}>Maximum file size 50 MB</p>

                                                    <label htmlFor="fileInput" className="upload-label"></label>
                                                </div>

                                                <label>Hospital License</label>
                                                <div className="upload-container mb-4 mt-1 position-relative" >

                                                    <div className="upload-icon mt-3">
                                                        <img src={Upload} alt='Upload ' style={{ width: "50px", height: "50px" }}></img>
                                                    </div>
                                                    <p className="upload-text mb-1">Click to upload or drag and drop</p>
                                                    <p className=" text-dark mb-3" style={{ color: 'black' }}>Maximum file size 50 MB</p>

                                                    <input type="file" id="fileInput" className="custom-file-input" />
                                                    <label htmlFor="fileInput" className="upload-label"></label>
                                                </div>
                                            </div>

                                            <div className="d-grid gap-2">
                                                <Button variant="primary" size="lg" onClick={handleLogoutClick}>
                                                    Register Now
                                                </Button>
                                                <OTPModal show={showLogoutModal} onClose={handleLogoutClose} onLogout={handleLogoutConfirm}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default RegistrationPage
