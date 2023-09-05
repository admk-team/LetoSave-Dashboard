import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import filter from "../Components/Assets/Icons/filter.png"
import Pic from "../Components/Assets/Icons/pic.png"
import Pic2 from "../Components/Assets/Icons/Group 415.png"
import Pic3 from "../Components/Images/cros.png"
import Pic1 from "../Components/Images/mess.png"
import no1 from '../Components/Assets/Icons/calendar.png'
import no2 from '../Components/Assets/Icons/telephone.png'
import no3 from '../Components/Assets/Icons/gender.png'
import no4 from '../Components/Assets/Icons/flat.png'
import no5 from '../Components/Assets/Icons/surface1.png'


const SinglePatientDetail = () => {
    return (
        <>
            <div className="container-fluid p-3 p-md-5" style={{ marginTop: "30px" }}>
                <div className='d-flex justify-content-end'>
                    <Form >
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


                <div className="row mt-4 ">
                    <div className='col-12 col-xl-2'>
                        <img src={Pic} style={{ width: '170px', height: '170px' }} alt=''></img>
                    </div>

                    <div className="col-12 col-xl-5">
                        <div className='d-flex'>
                            <h2 className='ms-3 fw-bold mt-2'>Cive Slauw</h2>
                            <p className='pt-1'><span className="badge bg-success p-2 mt-2 ms-3">APPROVED</span></p>
                            <div className='d-block d-xl-none'>
                                <img src={Pic1} className='mt-2 me-2 ' alt=''></img>
                                <img src={Pic2} className='mt-2 me-2' alt=''></img>
                                <img src={Pic3} className='mt-2' alt=''></img>
                            </div>
                        </div>
                        <div className='d-flex pt-3'>
                            <img src={no1} className='no1pic' style={{ marginLeft: "19px" }} alt=''></img>
                            <h5 className=' date-of-birth' style={{ marginLeft: '12px', marginBottom: '5px' }}>Date of birth</h5>
                        </div>
                        <div className='border-bottom pb-3'>
                            <h5 className='dateof fw-semibold' style={{ marginLeft: '52px' }}>15 Apr, 1982</h5>
                        </div>
                        <div className='d-flex pt-3'>
                            <img src={no2} className='no1pic' style={{ marginLeft: "19px" }} alt=''></img>
                            <h5 className=' date-of-birth' style={{ marginLeft: '12px', marginBottom: '5px' }}>Phone number</h5>
                        </div>
                        <div className='border-bottom pb-3'>
                            <h5 className='dateof fw-semibold' style={{ marginLeft: '52px' }}>+91 987 345 3214</h5>
                        </div>
                        <div className='d-flex pt-3'>
                            <img src={no1} className='no1pic' style={{ marginLeft: "19px" }} alt=''></img>
                            <h5 className=' date-of-birth' style={{ marginLeft: '12px', marginBottom: '5px' }}>Expected delivery date</h5>
                        </div>
                        <div className='border-bottom pb-3'>
                            <h5 className='dateof fw-semibold' style={{ marginLeft: '52px' }}>15 March, 2024</h5>
                        </div>
                    </div>
                    <div className="col-12 col-xl-5 ">
                        <div className='d-none d-xl-block'>
                            <img src={Pic1} className='mt-2 pt-1 me-2 ps-5 ms-5' alt=''></img>
                            <img src={Pic2} className='mt-2 me-2' alt=''></img>
                            <img src={Pic3} className='mt-2' alt=''></img>
                        </div>
                        <div className='d-flex' style={{ paddingTop: "24px" }}>
                            <img src={no3} className='no1pic' style={{ marginLeft: "19px" }} alt=''></img>
                            <h5 className=' date-of-birth' style={{ marginLeft: '12px', marginBottom: '5px' }}>Child's Gender</h5>
                        </div>
                        <div className='border-bottom pb-3'>
                            <h5 className='dateof fw-semibold' style={{ marginLeft: '52px' }}>Male</h5>
                        </div>
                        <div className='d-flex pt-3'>
                            <img src={no4} className='no1pic' style={{ marginLeft: "19px" }} alt=''></img>
                            <h5 className=' date-of-birth' style={{ marginLeft: '12px', marginBottom: '5px' }}>Services:</h5>
                        </div>
                        <div className='border-bottom pb-3'>
                            <h5 className='dateof fw-semibold' style={{ marginLeft: '52px' }}>Normal</h5>
                        </div>
                        <div className='d-flex pt-3'>
                            <img src={no5} className='no1pic' style={{ marginLeft: "19px" }} alt=''></img>
                            <h5 className=' date-of-birth' style={{ marginLeft: '12px', marginBottom: '5px' }}>Total Cost of Services:</h5>
                        </div>
                        <div className='border-bottom pb-3'>
                            <h5 className='dateof fw-semibold' style={{ marginLeft: '52px' }}>UGX 852,000</h5>
                        </div>
                    </div>
                </div>

                <h4 className='fw-semibold mt-4'>All Transactions</h4>
                <div className='table-responsive'>
                    <table className="table table-hover mt-2">
                        <thead>
                            <tr>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>
                                    <input className="form-check-input me-3 p-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1" htmlFor="invalidCheck" >
                                        Deposit Name
                                    </label></th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>Transaction/Deposits</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>Transaction Id</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>Phone Number</th>

                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>Status</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>Time of Amounts</th>

                            </tr>
                        </thead>
                        <tbody>

                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" htmlFor="invalidCheck" style={{ fontSize: '200' }}>
                                        John Richards
                                    </label>
                                </th>
                                <td className='pt-3'>UGX 150,000</td>

                                <td className='pt-3'>TNC038343546453</td>

                                <td className='pt-3'>+91234244355</td>
                                <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>
                                <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                            </tr>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" htmlFor="invalidCheck" style={{ fontSize: '200' }}>
                                        John Richards
                                    </label>
                                </th>
                                <td className='pt-3'>UGX 150,000</td>

                                <td className='pt-3'>TNC038343546453</td>

                                <td className='pt-3'>+91234244355</td>
                                <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>
                                <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                            </tr>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" htmlFor="invalidCheck" style={{ fontSize: '200' }}>
                                        John Richards
                                    </label>
                                </th>
                                <td className='pt-3'>UGX 150,000</td>

                                <td className='pt-3'>TNC038343546453</td>

                                <td className='pt-3'>+91234244355</td>
                                <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>
                                <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default SinglePatientDetail
