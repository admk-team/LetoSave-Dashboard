import React from 'react'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Imag from "../Pages/logo.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const WellComeBackPage = () => {
    return (
        <>
            <Container className="d-flex justify-content-center align-items-center  " style={{marginTop:"70px"}}>

                <div className="container ">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col">
                            <div className="card card-registration" style={{ borderColor: "white" }}>
                                <div className="row g-5">
                                    <div className="col-md-6 d-none d-md-block rounded" style={{ backgroundColor: "#064FB8" }}>
                                        <div className='d-flex flex-column align-items-center justify-content-center' style={{margin:'160px 0'}}>
                                            <img src={Imag} alt='LOGO' className='w-15 h-15 mt-5 pt-5'></img>
                                            <h1 className='text-white fw-bold' style={{ letterSpacing: "4px", fontSize: "55px" }}>LetoSave</h1>
                                        </div>
                                    </div>
                                    <div className="col-md-6 g-5">
                                        <div className="card-body text-black d-flex flex-column  justify-content-center" style={{margin:'160px 0'}}>
                                            <h2 className="mb-2 fw-bold " style={{ color: "#064FB8" }}>Wellcome back!</h2>
                                            <p className=''>Request to one time password to log into your account <br></br> and access all applicates.</p>

                                            <Form.Floating className="mb-4 mt-3">
                                                <Form.Control
                                                    id="floatingInputCustom"
                                                    type="email"
                                                    placeholder="name@example.com"
                                                />
                                                <label htmlFor="floatingInputCustom">Email Address</label>
                                            </Form.Floating>
                                            <Form.Floating className='mb-4'>
                                                <Form.Control
                                                    id="floatingPasswordCustom"
                                                    type="password"
                                                    placeholder="Password"
                                                />
                                                <label htmlFor="floatingPasswordCustom">Password</label>
                                            </Form.Floating>
                                            <div className='d-flex justify-content-between'>
                                                <Form.Group className="mb-3" id="formGridCheckbox">
                                                    <Form.Check type="checkbox" label="Remember login" />
                                                </Form.Group>

                                                <a href='!#' className='text-decoration-none'>Forgot password?</a>

                                            </div>
                                            <div className="d-grid gap-2 mt-4">
                                                <Button variant="primary" size="lg">
                                                    Login
                                                </Button>
                                            </div>


                                            <div className="d-flex justify-content-center mt-5">
                                                <p>Don't have an account? <a href='!#' className='text-decoration-none'>Sign Up</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container >
        </>
    )
}

export default WellComeBackPage
