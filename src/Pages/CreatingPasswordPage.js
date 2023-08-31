import React from 'react'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Imag from "../Components/Images/logo.png";
import Button from 'react-bootstrap/Button';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const CreatingPasswordPage = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>LetoSave | Create-Password</title>
                </Helmet>
            </HelmetProvider>
            <Container className="d-flex justify-content-center align-items-center  " style={{ marginTop: "90px" }}>

                <div className="container ">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col">
                            <div className="card card-registration" style={{ borderColor: "white" }}>
                                <div className="row g-5">
                                    <div className="col-md-6 d-none d-md-block rounded" style={{ backgroundColor: "#064FB8" }}>
                                        <div className=' d-flex flex-column align-items-center justify-content-center mb-3' style={{ margin: '200px 0' }}>
                                            <img src={Imag} alt='LOGO' className='w-15 h-15 mt-5'></img>
                                            <h1 className='text-white fw-bold' style={{ letterSpacing: "4px", fontSize: "55px" }}>LetoSave</h1>
                                        </div>
                                    </div>
                                    <div className="col-md-6 g-5">
                                        <div className="card-body text-black  d-flex flex-column  justify-content-center" style={{ margin: '200px 0' }}>
                                            <h2 className="mb-2  fw-bold" style={{ color: "#064FB8" }}>Create Password</h2>
                                            <p className=''>Enter Password for your new login</p>

                                            <div className="form-outline mb-4">
                                                <label>Create Password</label>
                                                <input type="password" id="form3Example8" className="form-control form-control-lg mt-1" />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label>Re-type Create Password</label>
                                                <input type="password" id="form3Example8" className="form-control form-control-lg mt-1" />
                                            </div>

                                            <div className="d-grid gap-2">
                                                <Button variant="primary" size="lg">
                                                    Create Password
                                                </Button>
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

export default CreatingPasswordPage
