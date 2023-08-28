import React from 'react'
import dognot from "../Components/Images/Untitled design (22).png"
import str from "../Components/Images/Untitled design (33).png"
import str1 from "../Components/Images/Untitled design (44).png"
import str2 from "../Components/Images/Untitled design (55).png"


const TransactionReportComponent = () => {
    return (
        <>
            <div className="container-fluid p-4 p-md-5" style={{ marginTop: "30px" }}>
                <div className="row g-5">
                    <div className="col-md-6">
                        <div className="card mb-4 border-0">
                            <div className="card-header d-flex justify-content-between align-items-center" >

                                <div >
                                    <h5 className='fw-semibold '>Transaction Volume</h5>
                                </div>
                                <div className="d-flex align-items-center">
                                    <select id="inputState" className="form-select">
                                        <option selected>Weekly</option>
                                        <option>...</option>
                                    </select>

                                </div>
                            </div>
                            <div className=" d-flex justify-content-center mt-4">
                                <img src={dognot} className='img-fluid' alt='' ></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        {/* Display the second table only on larger screens */}
                        <div className="card mb-4  border-0">
                            <div className="card-header d-flex justify-content-between align-items-center">

                                <div>
                                    <h5 className='fw-semibold'>Total Revenue</h5>
                                </div>
                                <div className="d-flex align-items-center">
                                    <select id="inputState" className="form-select">
                                        <option selected>Weekly</option>
                                        <option>...</option>
                                    </select>

                                </div>
                            </div>

                            <div className=" d-flex justify-content-center mt-4">
                                <img src={str} className=' img-fluid' alt=''></img>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-md-6">
                        <div className="card mb-4 border-0">
                            <div className="card-header d-flex justify-content-between align-items-center" >

                                <div >
                                    <h5 className='fw-semibold '>
                                        Transaction by Service
                                    </h5>
                                </div>
                                <div className="d-flex align-items-center">


                                </div>
                            </div>

                            <div className=" d-flex justify-content-center mt-4">
                                <img src={str1} className=' img-fluid' alt='' ></img>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        {/* Display the second table only on larger screens */}
                        <div className="card mb-4  border-0">
                            <div className="card-header d-flex justify-content-between align-items-center">

                                <div>
                                    <h5 className='fw-semibold'>Transaction Status</h5>
                                </div>
                                <div className="d-flex align-items-center">


                                </div>
                            </div>

                            <div className=" d-flex justify-content-center mt-4">
                                <img src={str2} className='img-fluid' alt='' ></img>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='table-responsive mt-3'>
                    <table class="table table-hover text-center">
                        <thead>
                            <tr>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>
                                    <input className="form-check-input me-3 p-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1" for="invalidCheck" >
                                        Patient Name
                                    </label></th>
                               
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Transaction Date</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Service</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Transaction ID</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Phone Number</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Status</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Amount</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                        Alexa Cave
                                    </label>
                                </th>
                               
                                <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                                <td className='pt-3'>Double Room-Normal</td>
                                <td className='pt-3'>303963058</td>
                                <td className='pt-3'>+91 23452335</td>
                                <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>
                                <td className='pt-3'>UGX 150,000</td>

                            </tr>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                        Alexa Cave
                                    </label>
                                </th>
                               
                                <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                                <td className='pt-3'>Double Room-Normal</td>
                                <td className='pt-3'>303963058</td>
                                <td className='pt-3'>+91 23452335</td>
                                <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>
                                <td className='pt-3'>UGX 150,000</td>

                            </tr>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                        Alexa Cave
                                    </label>
                                </th>
                               
                                <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                                <td className='pt-3'>Double Room-Normal</td>
                                <td className='pt-3'>303963058</td>
                                <td className='pt-3'>+91 23452335</td>
                                <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>
                                <td className='pt-3'>UGX 150,000</td>

                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default TransactionReportComponent
