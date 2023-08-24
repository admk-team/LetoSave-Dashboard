import React from 'react'
import im from "../Components/Assets/Icons/medical-report.png"
import im1 from "../Components/Assets/Icons/transaction.png"

import im2 from "../Components/Assets/Icons/income.png"

import im3 from "../Components/Assets/Icons/speedometer.png"
import { Link } from 'react-router-dom'


const ReportBox = () => {

    return (
        <>
            <div className="container-fluid " style={{ marginTop: "80px" }}>
                <div className="row">

                    <div className="col-12 col-md-3">
                        <Link to="/Patient-report" className='text-decoration-none'>
                            <div className={`box bg-danger text-white text-center mb-4 pt-4 pb-4 rounded`}>
                                <div className="heading" ><img src={im} alt=''></img></div>
                                <div className="number mt-3 " style={{ fontSize: '40px', fontWeight: "bolder" }}><h4>Pateint Report</h4></div>

                            </div>
                        </Link>
                    </div>
                    <div className="col-12 col-md-3">
                        <Link to="/Transaction-report" className='text-decoration-none'>
                            <div className={`box bg-success text-white text-center mb-4 pt-4 pb-4 rounded`}>
                                <div className="heading" ><img src={im1} alt=''></img></div>
                                <div className="number mt-3" style={{ fontSize: '40px', fontWeight: "bolder" }}><h4>Transaction Report</h4></div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-12 col-md-3">
                        <Link to="/Revenue-report" className='text-decoration-none'>
                            <div className={`box bg-primary text-white text-center mb-4 pt-4 pb-4 rounded`}>
                                <div className="heading" ><img src={im2} alt=''></img></div>
                                <div className="number mt-3" style={{ fontSize: '40px', fontWeight: "bolder" }}><h4>Revenue Report</h4></div>

                            </div>
                        </Link>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className={`box bg-warning text-white text-center mb-4 pt-4 pb-4 rounded`}>
                            <div className="heading" ><img src={im3} alt=''></img></div>
                            <div className="number mt-3" style={{ fontSize: '40px', fontWeight: "bolder" }}><h4>Performance</h4></div>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ReportBox
