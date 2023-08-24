import React from 'react'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Imag from "../Components/Images/logo.png";
import Button from 'react-bootstrap/Button';

import Back from "../Components/Images/arrow.png";
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
    return (
        <>
            <Container className="d-flex justify-content-center align-items-center" style={{ marginTop: "90px" }}>

                <div className="container ">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col">
                            <div className="card card-registration" style={{ borderColor: "white" }}>
                                <div className="row g-5">
                                    <div className="col-md-6 d-none d-md-block rounded" style={{ backgroundColor: "#064FB8" }}>
                                        <div className=' d-flex flex-column align-items-center justify-content-center ' style={{ margin: '200px 0' }}>
                                            <img src={Imag} alt='LOGO' className='w-15 h-15 mt-5'></img>
                                            <h1 className='text-white fw-bold' style={{ letterSpacing: "4px", fontSize: "55px" }}>LetoSave</h1>
                                        </div>
                                    </div>
                                    <div className="col-md-6 g-5">
                                        <div className="card-body text-black d-flex flex-column  justify-content-center" style={{ margin: '200px 0' }}>
                                            <h2 className="mb-2 fw-bold" style={{ color: "#064FB8" }}>Forgot password?</h2>
                                            <p className=''>No worries, we'll send you reset instructions.</p>

                                            <div className="form-outline">
                                                <label>Email address</label>
                                                <input type="email" id="form3Example1m1" className="form-control form-control-lg mt-1" placeholder='Enter your email' />

                                            </div>
                                            <div className="d-grid gap-2 mt-4">
                                                <Link to="/Reset-Password" >
                                                    <Button to="/Reset-Password" variant="primary" size="lg">
                                                        Reset Password
                                                    </Button>
                                                </Link>
                                            </div>
                                            <div className=" mt-4 rounded py-2 d-flex justify-content-center border border-black" >
                                                <a href='!#' size="lg" className='text-decoration-none text-dark'>
                                                    <img src={Back} alt='Back' style={{ width: "20px", height: "20px" }}></img>  Back to log in
                                                </a>
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

export default ForgotPasswordPage
