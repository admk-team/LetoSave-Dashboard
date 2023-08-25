import React from 'react'
import dognot from "../Components/Images/11.png"
import str from "../Components/Images/22.png"
import str1 from "../Components/Images/33.png"
import str2 from "../Components/Images/44.png"




const PatientReportComponent = () => {
    return (
        <>
            <div className="container-fluid p-4 p-md-5" style={{marginTop:"40px"}}>
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
                                <table className="table table-bordered">
                                    <img src={dognot} className=' img-fluid mt-4' alt=''></img>
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
                                <table className="table table-bordered">
                                    <img src={str} className='img-fluid' alt=''></img>
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
                                <table className="table table-bordered">
                                    <img src={str1} className='mt-3 ms-2 img-fluid' alt='' style={{marginLeft:"-25px"}}></img>
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
                                <table className="table table-bordered">
                                    <img src={str2} className='ms-1 img-fluid' alt='' style={{marginLeft:"-25px"}}></img>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PatientReportComponent
