import React from 'react'
import dognot from "../Components/Images/Untitled design (222).png"
import str from "../Components/Images/Untitled design (333).png"
import str1 from "../Components/Images/Untitled design (444).png"
import str2 from "../Components/Images/Untitled design (555).png"




const PatientReportComponent = () => {
    return (
        <>
            <div className="container-fluid p-4 p-md-5" style={{ marginTop: "40px" }}>
                <div className="row g-5">
                    <div className="col-md-6">
                        <div className="card mb-4 border-0">
                            <div className="card-header d-flex justify-content-between align-items-center" >

                                <div >
                                    <h5 className='fw-semibold '>Pateint Progress by Months</h5>
                                </div>
                                <div className="d-flex align-items-center">


                                </div>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered text-center mt-4">
                                    <img src={dognot} className=' img-fluid ' alt='' ></img>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        {/* Display the second table only on larger screens */}
                        <div className="card mb-4  border-0">
                            <div className="card-header d-flex justify-content-between align-items-center">

                                <div>
                                    <h5 className='fw-semibold'>Patient by Age</h5>
                                </div>
                                <div className="d-flex align-items-center">


                                </div>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered text-center mt-4">
                                    <img src={str} className='img-fluid' alt='' ></img>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-md-6">
                        <div className="card mb-4 border-0">
                            <div className="card-header d-flex justify-content-between align-items-center" >

                                <div >
                                    <h5 className='fw-semibold '>Deliveries by Services</h5>
                                </div>
                                <div className="d-flex align-items-center">


                                </div>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered text-center mt-4">
                                    <img src={str1} className='img-fluid' alt='' ></img>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        {/* Display the second table only on larger screens */}
                        <div className="card mb-4  border-0">
                            <div className="card-header d-flex justify-content-between align-items-center">

                                <div>
                                    <h5 className='fw-semibold'>Total Deliveries</h5>
                                </div>
                                <div className="d-flex align-items-center">


                                </div>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered text-center mt-4">
                                    <img src={str2} className='img-fluid' alt='' ></img>
                                </table>
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
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Registration Date</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Exp. Delivery Date</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Selected Service</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Total Cost</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Amount Paid</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Outstanding Balance</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Status</th>

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
                                <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                                <td className='pt-3'>C-Section-Private</td>
                                <td className='pt-3'>UGX 850,000</td>
                                <td className='pt-3'>UGX 100,000</td>
                                <td className='pt-3'>UGX 750,000</td>
                                <td ><span className="badge p-2 me-2 mt-2 " style={{backgroundColor:"#00CCFF"}}>REGISTERED</span> </td>
                            </tr>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                        Alexa Cave
                                    </label>
                                </th>
                                <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                                <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                                <td className='pt-3'>C-Section-Private</td>
                                <td className='pt-3'>UGX 850,000</td>
                                <td className='pt-3'>UGX 100,000</td>
                                <td className='pt-3'>UGX 750,000</td>
                                <td ><span className="badge p-2 me-2 mt-2 " style={{backgroundColor:"#00CCFF"}}>REGISTERED</span> </td>
                            </tr>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                        Alexa Cave
                                    </label>
                                </th>
                                <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                                <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                                <td className='pt-3'>C-Section-Private</td>
                                <td className='pt-3'>UGX 850,000</td>
                                <td className='pt-3'>UGX 100,000</td>
                                <td className='pt-3'>UGX 750,000</td>
                                <td ><span className="badge p-2 me-2 mt-2 " style={{backgroundColor:"#00CCFF"}}>REGISTERED</span> </td>
                            </tr>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                        Alexa Cave
                                    </label>
                                </th>
                                <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                                <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                                <td className='pt-3'>C-Section-Private</td>
                                <td className='pt-3'>UGX 850,000</td>
                                <td className='pt-3'>UGX 100,000</td>
                                <td className='pt-3'>UGX 750,000</td>
                                <td ><span className="badge p-2 me-2 mt-2 " style={{backgroundColor:"#00CCFF"}}>REGISTERED</span> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default PatientReportComponent
