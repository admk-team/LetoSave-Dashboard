import React from 'react'
import dognot from "../Images/dugnu.png"
import str from "../Images/striat.png"

import Img from "../Images/more.png"
import { Avatar } from '@mui/material'

const Table = () => {

    return (
        <>
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card mb-4 border-0">
                            <div className="card-header d-flex justify-content-between align-items-center" >

                                <div >
                                    <h5 className='fw-semibold'>Savings</h5>
                                </div>
                                <div className="d-flex align-items-center">

                                    <img src={Img} alt='' style={{ width: '40px', height: '30px' }}></img>
                                </div>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered">
                                    <img src={dognot} className='ms-3 ms-md-5 w-75 w-md-100 h-75 h-md-100' alt=''></img>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                       
                        <div className="card mb-4  border-0">
                            <div className="card-header d-flex justify-content-between align-items-center">

                                <div>
                                    <h5 className='fw-semibold'>Expected Deliviries</h5>
                                </div>
                                <div className="d-flex align-items-center">

                                    <img src={Img} alt='' style={{ width: '40px', height: '30px' }}></img>
                                </div>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered">
                                    <img src={str} className='ms-3 ms-md-5  w-75 w-md-100 h-75 h-md-100 mt-3 ' alt=''></img>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-6">
                        <div className="card mb-4 border-0">
                            <div className="card-header d-flex justify-content-between align-items-center border-0">

                                <div>
                                    <h5 className='fw-semibold'>Recent Transactions</h5>
                                </div>
                                <div className="d-flex align-items-center">
                                    <img src={Img} alt='' style={{ width: '40px', height: '30px' }}></img>
                                </div>
                            </div>
                            <div className="card-body">
                                <table className="table" style={{ marginTop: "-15px" }}>
                                    <table class="table">
                                        <thead >
                                            <tr >

                                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>Patient</th>
                                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8", textAlign: "center" }}>Deposite Ammount</th>
                                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8", textAlign: "center" }}>Time of Transaction</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>

                                                <td className='d-flex'>
                                                    <Avatar alt="Remy Sharp" className='' sx={{ width: 37, height: 37 }} src="/static/images/avatar/1.jpg" />
                                                    <p className='Adin ms-3'> Flexi Health <br></br> Admin</p>
                                                </td>
                                                <td style={{ textAlign: "center", paddingTop: '20px', fontWeight: 'bold' }}>$170,150</td>
                                                <td style={{ textAlign: "center", paddingTop: "20px", fontSize: "0.8em" }}>15 july, 2023 | 05:22 PM</td>
                                            </tr>
                                            <tr>

                                                <td className='d-flex'>
                                                    <Avatar alt="Remy Sharp" className='' sx={{ width: 37, height: 37 }} src="/static/images/avatar/1.jpg" />
                                                    <p className='Adin ms-3'> Flexi Health <br></br> Admin</p>
                                                </td>
                                                <td style={{ textAlign: "center", paddingTop: '20px', fontWeight: 'bold' }}>$170,150</td>
                                                <td style={{ textAlign: "center", paddingTop: "20px", fontSize: "0.8em" }}>15 july, 2023 | 05:22 PM</td>
                                            </tr>
                                            <tr>

                                                <td className='d-flex'>
                                                    <Avatar alt="Remy Sharp" className='' sx={{ width: 37, height: 37 }} src="/static/images/avatar/1.jpg" />
                                                    <p className='Adin ms-3'> Flexi Health <br></br> Admin</p>
                                                </td>
                                                <td style={{ textAlign: "center", paddingTop: '20px', fontWeight: 'bold' }}>$170,150</td>
                                                <td style={{ textAlign: "center", paddingTop: "20px", fontSize: "0.8em" }}>15 july, 2023 | 05:22 PM</td>
                                            </tr>
                                            <tr>

                                                <td className='d-flex'>
                                                    <Avatar alt="Remy Sharp" className='' sx={{ width: 37, height: 37 }} src="/static/images/avatar/1.jpg" />
                                                    <p className='Adin ms-3'> Flexi Health <br></br> Admin</p>
                                                </td>
                                                <td style={{ textAlign: "center", paddingTop: '20px', fontWeight: 'bold' }}>$170,150</td>
                                                <td style={{ textAlign: "center", paddingTop: "20px", fontSize: "0.8em" }}>15 july, 2023 | 05:22 PM</td>
                                            </tr>
                                            <tr>

                                                <td className='d-flex'>
                                                    <Avatar alt="Remy Sharp" className='' sx={{ width: 37, height: 37 }} src="/static/images/avatar/1.jpg" />
                                                    <p className='Adin ms-3'> Flexi Health <br></br> Admin</p>
                                                </td>
                                                <td style={{ textAlign: "center", paddingTop: '20px', fontWeight: 'bold' }}>$170,150</td>
                                                <td style={{ textAlign: "center", paddingTop: "20px", fontSize: "0.8em" }}>15 july, 2023 | 05:22 PM</td>
                                            </tr>
                                            <tr>

                                                <td className='d-flex'>
                                                    <Avatar alt="Remy Sharp" className='' sx={{ width: 37, height: 37 }} src="/static/images/avatar/1.jpg" />
                                                    <p className='Adin ms-3'> Flexi Health <br></br> Admin</p>
                                                </td>
                                                <td style={{ textAlign: "center", paddingTop: '20px', fontWeight: 'bold' }}>$170,150</td>
                                                <td style={{ textAlign: "center", paddingTop: "20px", fontSize: "0.8em" }}>15 july, 2023 | 05:22 PM</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        
                        <div className="card mb-4 border-0">
                            <div className="card-header d-flex justify-content-between align-items-center border-0">

                                <div>
                                    <h5 className='fw-semibold'>Recent Registration</h5>
                                </div>
                                <div className="d-flex align-items-center">

                                    <img src={Img} alt='' style={{ width: '40px', height: '30px' }}></img>
                                </div>
                            </div>
                            <div className="card-body">
                                <table className="table" style={{ marginTop: "-15px" }}>
                                    <table class="table">
                                        <thead >
                                            <tr >

                                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>Patient</th>
                                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8", textAlign: "center" }}>Deposite Ammount</th>
                                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8", textAlign: "center" }}>Time of Transaction</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>

                                                <td className='d-flex'>
                                                    <Avatar alt="Remy Sharp" className='' sx={{ width: 37, height: 37 }} src="/static/images/avatar/1.jpg" />
                                                    <p className='Adin ms-3'> Flexi Health <br></br> Admin</p>
                                                </td>
                                                <td style={{ textAlign: "center", paddingTop: '20px', fontWeight: 'bold' }}>$170,150</td>
                                                <td style={{ textAlign: "center", paddingTop: "20px", fontSize: "0.8em" }}>15 july, 2023 | 05:22 PM</td>
                                            </tr>
                                            <tr>

                                                <td className='d-flex'>
                                                    <Avatar alt="Remy Sharp" className='' sx={{ width: 37, height: 37 }} src="/static/images/avatar/1.jpg" />
                                                    <p className='Adin ms-3'> Flexi Health <br></br> Admin</p>
                                                </td>
                                                <td style={{ textAlign: "center", paddingTop: '20px', fontWeight: 'bold' }}>$170,150</td>
                                                <td style={{ textAlign: "center", paddingTop: "20px", fontSize: "0.8em" }}>15 july, 2023 | 05:22 PM</td>
                                            </tr>
                                            <tr>

                                                <td className='d-flex'>
                                                    <Avatar alt="Remy Sharp" className='' sx={{ width: 37, height: 37 }} src="/static/images/avatar/1.jpg" />
                                                    <p className='Adin ms-3'> Flexi Health <br></br> Admin</p>
                                                </td>
                                                <td style={{ textAlign: "center", paddingTop: '20px', fontWeight: 'bold' }}>$170,150</td>
                                                <td style={{ textAlign: "center", paddingTop: "20px", fontSize: "0.8em" }}>15 july, 2023 | 05:22 PM</td>
                                            </tr>
                                            <tr>

                                                <td className='d-flex'>
                                                    <Avatar alt="Remy Sharp" className='' sx={{ width: 37, height: 37 }} src="/static/images/avatar/1.jpg" />
                                                    <p className='Adin ms-3'> Flexi Health <br></br> Admin</p>
                                                </td>
                                                <td style={{ textAlign: "center", paddingTop: '20px', fontWeight: 'bold' }}>$170,150</td>
                                                <td style={{ textAlign: "center", paddingTop: "20px", fontSize: "0.8em" }}>15 july, 2023 | 05:22 PM</td>
                                            </tr>
                                            <tr>

                                                <td className='d-flex'>
                                                    <Avatar alt="Remy Sharp" className='' sx={{ width: 37, height: 37 }} src="/static/images/avatar/1.jpg" />
                                                    <p className='Adin ms-3'> Flexi Health <br></br> Admin</p>
                                                </td>
                                                <td style={{ textAlign: "center", paddingTop: '20px', fontWeight: 'bold' }}>$170,150</td>
                                                <td style={{ textAlign: "center", paddingTop: "20px", fontSize: "0.8em" }}>15 july, 2023 | 05:22 PM</td>
                                            </tr>
                                            <tr>

                                                <td className='d-flex'>
                                                    <Avatar alt="Remy Sharp" className='' sx={{ width: 37, height: 37 }} src="/static/images/avatar/1.jpg" />
                                                    <p className='Adin ms-3'> Flexi Health <br></br> Admin</p>
                                                </td>
                                                <td style={{ textAlign: "center", paddingTop: '20px', fontWeight: 'bold' }}>$170,150</td>
                                                <td style={{ textAlign: "center", paddingTop: "20px", fontSize: "0.8em" }}>15 july, 2023 | 05:22 PM</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table
