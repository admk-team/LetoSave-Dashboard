import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import cros from "../Components/Images/pin.png"


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


const ServiceManagmentPage = () => {
    return (
        <>
            <div className="container-fluid " style={{ marginTop: "80px" }}>
                <div className='d-flex justify-content-end'>
                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <Link to="/AddServicemanagement" >
                                    <Button variant="secondary" className='add-butoon' size="lg" active style={{ backgroundColor: "#064FB8" }}>
                                        + Add New
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Form>
                </div>
                <div className='mt-3'>
                    <div className='table-responsive'>
                        <table class="table table-hover text-center">
                            <thead>
                                <tr>
                                    <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>
                                        <input className="form-check-input me-1 p-2" type="checkbox" value="" id="invalidCheck" required />
                                        <label className="form-check-label mt-1" for="invalidCheck" >
                                            Service Name
                                        </label></th>
                                    <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Ward Type</th>
                                    <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Room Type</th>
                                    <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Delivery Type</th>
                                    <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Service Description</th>
                                    <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Cost</th>
                                    <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Postanatal Care</th>
                                    <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Doctor's Fees</th>
                                    <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}></th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ fontSize: "0.9em", }}>
                                    <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                        <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                            Delivery
                                        </label>
                                    </th>

                                    <td className='pt-3'>Private</td>
                                    <td>Double<br></br>Accupancy</td>
                                    <td className='pt-3'>C-Section</td>
                                    <td className='pt-3'>Coming Soon</td>
                                    <td className='pt-3'>UGX 850,500</td>
                                    <td className='pt-3'>Yes</td>
                                    <td className='pt-3'>UGX 150,000</td>
                                    <td>
                                        <img src={cros} className='me-2' alt='' />
                                    </td>
                                </tr>
                                <tr style={{ fontSize: "0.9em", }}>
                                    <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                        <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                            Delivery
                                        </label>
                                    </th>

                                    <td className='pt-3'>Private</td>
                                    <td>Double<br></br>Accupancy</td>
                                    <td className='pt-3'>C-Section</td>
                                    <td className='pt-3'>Coming Soon</td>
                                    <td className='pt-3'>UGX 850,500</td>
                                    <td className='pt-3'>Yes</td>
                                    <td className='pt-3'>UGX 150,000</td>
                                    <td>
                                        <img src={cros} className='me-2' alt='' />
                                    </td>
                                </tr>
                                <tr style={{ fontSize: "0.9em", }}>
                                    <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                        <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                            Delivery
                                        </label>
                                    </th>

                                    <td className='pt-3'>Private</td>
                                    <td>Double<br></br>Accupancy</td>
                                    <td className='pt-3'>C-Section</td>
                                    <td className='pt-3'>Coming Soon</td>
                                    <td className='pt-3'>UGX 850,500</td>
                                    <td className='pt-3'>Yes</td>
                                    <td className='pt-3'>UGX 150,000</td>
                                    <td>
                                        <img src={cros} className='me-2' alt='' />
                                    </td>
                                </tr>
                                <tr style={{ fontSize: "0.9em", }}>
                                    <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                        <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                            Delivery
                                        </label>
                                    </th>

                                    <td className='pt-3'>Private</td>
                                    <td>Double<br></br>Accupancy</td>
                                    <td className='pt-3'>C-Section</td>
                                    <td className='pt-3'>Coming Soon</td>
                                    <td className='pt-3'>UGX 850,500</td>
                                    <td className='pt-3'>Yes</td>
                                    <td className='pt-3'>UGX 150,000</td>
                                    <td>
                                        <img src={cros} className='me-2' alt='' />
                                    </td>
                                </tr>
                                <tr style={{ fontSize: "0.9em", }}>
                                    <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                        <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                            Delivery
                                        </label>
                                    </th>

                                    <td className='pt-3'>Private</td>
                                    <td>Double<br></br>Accupancy</td>
                                    <td className='pt-3'>C-Section</td>
                                    <td className='pt-3'>Coming Soon</td>
                                    <td className='pt-3'>UGX 850,500</td>
                                    <td className='pt-3'>Yes</td>
                                    <td className='pt-3'>UGX 150,000</td>
                                    <td>
                                        <img src={cros} className='me-2' alt='' />
                                    </td>
                                </tr>
                                <tr style={{ fontSize: "0.9em", }}>
                                    <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                        <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                            Delivery
                                        </label>
                                    </th>

                                    <td className='pt-3'>Private</td>
                                    <td>Double<br></br>Accupancy</td>
                                    <td className='pt-3'>C-Section</td>
                                    <td className='pt-3'>Coming Soon</td>
                                    <td className='pt-3'>UGX 850,500</td>
                                    <td className='pt-3'>Yes</td>
                                    <td className='pt-3'>UGX 150,000</td>
                                    <td>
                                        <img src={cros} className='me-2' alt='' />
                                    </td>
                                </tr>
                                <tr style={{ fontSize: "0.9em", }}>
                                    <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                        <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                            Delivery
                                        </label>
                                    </th>

                                    <td className='pt-3'>Private</td>
                                    <td>Double<br></br>Accupancy</td>
                                    <td className='pt-3'>C-Section</td>
                                    <td className='pt-3'>Coming Soon</td>
                                    <td className='pt-3'>UGX 850,500</td>
                                    <td className='pt-3'>Yes</td>
                                    <td className='pt-3'>UGX 150,000</td>
                                    <td>
                                        <img src={cros} className='me-2' alt='' />
                                    </td>
                                </tr>
                                <tr style={{ fontSize: "0.9em", }}>
                                    <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                        <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                            Delivery
                                        </label>
                                    </th>

                                    <td className='pt-3'>Private</td>
                                    <td>Double<br></br>Accupancy</td>
                                    <td className='pt-3'>C-Section</td>
                                    <td className='pt-3'>Coming Soon</td>
                                    <td className='pt-3'>UGX 850,500</td>
                                    <td className='pt-3'>Yes</td>
                                    <td className='pt-3'>UGX 150,000</td>
                                    <td>
                                        <img src={cros} className='me-2' alt='' />
                                    </td>
                                </tr>
                                <tr style={{ fontSize: "0.9em", }}>
                                    <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                        <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                            Delivery
                                        </label>
                                    </th>

                                    <td className='pt-3'>Private</td>
                                    <td>Double<br></br>Accupancy</td>
                                    <td className='pt-3'>C-Section</td>
                                    <td className='pt-3'>Coming Soon</td>
                                    <td className='pt-3'>UGX 850,500</td>
                                    <td className='pt-3'>Yes</td>
                                    <td className='pt-3'>UGX 150,000</td>
                                    <td>
                                        <img src={cros} className='me-2' alt='' />
                                    </td>
                                </tr>
                                <tr style={{ fontSize: "0.9em", }}>
                                    <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                        <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                            Delivery
                                        </label>
                                    </th>

                                    <td className='pt-3'>Private</td>
                                    <td>Double<br></br>Accupancy</td>
                                    <td className='pt-3'>C-Section</td>
                                    <td className='pt-3'>Coming Soon</td>
                                    <td className='pt-3'>UGX 850,500</td>
                                    <td className='pt-3'>Yes</td>
                                    <td className='pt-3'>UGX 150,000</td>
                                    <td>
                                        <img src={cros} className='me-2' alt='' />
                                    </td>
                                </tr>






                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceManagmentPage
