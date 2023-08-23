import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import filter from "../Components/Assets/Icons/filter.png"
import Message from "../Components/Images/mess.png"
import cros from "../Components/Images/cros.png"

import Tik from "../Components/Assets/Icons/Group 415.png"


const PatientManagementPage = () => {
    return (
        <>
            <div className="container-fluid " style={{ marginTop: "90px" }}>
                <div className='d-flex justify-content-end'>
                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2 py-2.5 px-4"
                                />
                            </Col>
                            <Col xs="auto">
                                <Button variant="secondary" size="lg" active style={{ backgroundColor: "#6787B6" }}>
                                    <img src={filter} className='me-1 mb-1' alt='' />
                                    Filter
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
                <div className='mt-4'>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>
                                    <input className="form-check-input me-3 p-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1" for="invalidCheck" >
                                        Patient's Name
                                    </label></th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>Date of Registration</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>Cost of Services</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>Amount Saved</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>Rebalanced</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>Expiry Date</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>Phone Number</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>Patient Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                        Alexa Cave
                                    </label>
                                </th>
                                <td>26/02/2023 <br></br>12:42 PM</td>
                                <td className='pt-3'>UGX 2300</td>
                                <td className='pt-3'>UGX 343546</td>
                                <td className='pt-3'>UGX 343546</td>
                                <td className='pt-3'>26/02/2023</td>
                                <td className='pt-3'>+97 30730 848</td>
                                <td ><span className="badge text-bg-warning p-2 me-2 ">PENDING</span><img src={Message} className='me-2' alt=''>

                                </img><img src={Tik} className='me-2' alt=''>

                                </img><img src={cros} className='me-2' alt=''>

                                </img></td>
                            </tr>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                        Alexa Cave
                                    </label>
                                </th>
                                <td>26/02/2023 <br></br>12:42 PM</td>
                                <td className='pt-3'>UGX 2300</td>
                                <td className='pt-3'>UGX 343546</td>
                                <td className='pt-3'>UGX 343546</td>
                                <td className='pt-3'>26/02/2023</td>
                                <td className='pt-3'>+97 30730 848</td>
                                <td ><span className="badge text-bg-warning p-2 me-2 ">PENDING</span><img src={Message} className='me-2' alt=''>

                                </img><img src={Tik} className='me-2' alt=''>

                                </img><img src={cros} className='me-2' alt=''>

                                </img></td>
                            </tr>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                        Alexa Cave
                                    </label>
                                </th>
                                <td>26/02/2023 <br></br>12:42 PM</td>
                                <td className='pt-3'>UGX 2300</td>
                                <td className='pt-3'>UGX 343546</td>
                                <td className='pt-3'>UGX 343546</td>
                                <td className='pt-3'>26/02/2023</td>
                                <td className='pt-3'>+97 30730 848</td>
                                <td ><span className="badge text-bg-warning p-2 me-2 ">PENDING</span><img src={Message} className='me-2' alt=''>

                                </img><img src={Tik} className='me-2' alt=''>

                                </img><img src={cros} className='me-2' alt=''>

                                </img></td>
                            </tr>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                        Alexa Cave
                                    </label>
                                </th>
                                <td>26/02/2023 <br></br>12:42 PM</td>
                                <td className='pt-3'>UGX 2300</td>
                                <td className='pt-3'>UGX 343546</td>
                                <td className='pt-3'>UGX 343546</td>
                                <td className='pt-3'>26/02/2023</td>
                                <td className='pt-3'>+97 30730 848</td>
                                <td ><span className="badge text-bg-warning p-2 me-2 ">PENDING</span><img src={Message} className='me-2' alt=''>

                                </img><img src={Tik} className='me-2' alt=''>

                                </img><img src={cros} className='me-2' alt=''>

                                </img></td>
                            </tr>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                        Alexa Cave
                                    </label>
                                </th>
                                <td>26/02/2023 <br></br>12:42 PM</td>
                                <td className='pt-3'>UGX 2300</td>
                                <td className='pt-3'>UGX 343546</td>
                                <td className='pt-3'>UGX 343546</td>
                                <td className='pt-3'>26/02/2023</td>
                                <td className='pt-3'>+97 30730 848</td>
                                <td ><span className="badge text-bg-warning p-2 me-2 ">PENDING</span><img src={Message} className='me-2' alt=''>

                                </img><img src={Tik} className='me-2' alt=''>

                                </img><img src={cros} className='me-2' alt=''>

                                </img></td>
                            </tr>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                        Alexa Cave
                                    </label>
                                </th>
                                <td>26/02/2023 <br></br>12:42 PM</td>
                                <td className='pt-3'>UGX 2300</td>
                                <td className='pt-3'>UGX 343546</td>
                                <td className='pt-3'>UGX 343546</td>
                                <td className='pt-3'>26/02/2023</td>
                                <td className='pt-3'>+97 30730 848</td>
                                <td ><span className="badge text-bg-warning p-2 me-2 ">PENDING</span><img src={Message} className='me-2' alt=''>

                                </img><img src={Tik} className='me-2' alt=''>

                                </img><img src={cros} className='me-2' alt=''>

                                </img></td>
                            </tr>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                        Alexa Cave
                                    </label>
                                </th>
                                <td>26/02/2023 <br></br>12:42 PM</td>
                                <td className='pt-3'>UGX 2300</td>
                                <td className='pt-3'>UGX 343546</td>
                                <td className='pt-3'>UGX 343546</td>
                                <td className='pt-3'>26/02/2023</td>
                                <td className='pt-3'>+97 30730 848</td>
                                <td ><span className="badge text-bg-warning p-2 me-2 ">PENDING</span><img src={Message} className='me-2' alt=''>

                                </img><img src={Tik} className='me-2' alt=''>

                                </img><img src={cros} className='me-2' alt=''>

                                </img></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default PatientManagementPage