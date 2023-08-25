import React, { useState } from 'react';
import no1 from "../Components/Images/302.png"
import no2 from "../Components/Images/303.png"

import Button from 'react-bootstrap/Button';
import filter from "../Components/Assets/Icons/filter.png"
import bank from "../Components/Images/bank.png"
import im from "../Components/Images/wallet.png"
import im1 from "../Components/Images/layer1.png"
import { Link } from 'react-router-dom';
import WithdrawModal from './WithdrawModal';






const NavigationAndContent = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const renderContent = () => {

        const handleLogoutClick = () => {
            setShowLogoutModal(true);
        };

        const handleLogoutClose = () => {
            setShowLogoutModal(false);
        };

        const handleLogoutConfirm = () => {
            // Perform actual logout action here
            // For example: Redirect to logout page or clear session

            // Close the modal after logout
            setShowLogoutModal(false);
        };
        switch (activeTab) {
            case 'profile':
                return (
                    <>
                        <div className=''>
                            <div className='pe-0 ps-0 pb-0 pb-md-5 pe-md-5 ps-md-5'>
                                <div>
                                    <h3 className='fw-bold'>Profile</h3>
                                    <h5 className='border-bottom pb-4' >Basic info, like your name and address that will displayed in public</h5>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-4 col-md-3">
                                        <h4>Hospital Name</h4>
                                        <h4 className='mt-4'>Address</h4>
                                        <h4 className='mt-4'>Phone Number</h4>
                                        <h4 className='mt-4'>Email Address</h4>

                                    </div>
                                    <div className="col-6 col-md-3">
                                        <h4 className="fw-semibold ">Flexi Health</h4>
                                        <h4 className="fw-semibold mt-4">Kampala, Uganda 321654</h4>
                                        <h4 className="fw-semibold mt-4">+256 9876543214</h4>
                                        <h4 className="fw-semibold mt-4">info@flexihealth.com</h4>
                                    </div>
                                </div>
                                <div className="row row-cols-1 row-cols-md-2 g-3 g-md-5 mt-1 me-md-5 pe-md-5">
                                    <div className="col">
                                        <h4 className="fw-semibold ">Upload Certificate of Registration</h4>
                                        <div className="card rounded-lg mt-3">
                                            <img src={no1} className="card-img-top" alt="..." />

                                        </div>
                                    </div>
                                    <div className="col">
                                        <h4 className="fw-semibold ">Hospital License</h4>
                                        <div className="card mt-3">
                                            <img src={no2} className="card-img-top" alt="..." />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                );
            case 'password':
                return (
                    <>
                        <div className='pe-0 ps-0 pb-0 pb-md-5 pe-md-5 ps-md-5'>
                            <div>
                                <h3 className='fw-bold'>Password</h3>
                                <h5 className='border-bottom pb-4' >Enter your current and new password to reset your password</h5>
                            </div>
                            <form>
                                <div className="row mt-4 border-bottom pb-4">
                                    <label for="inputPassword3" className="col-sm-2 col-form-label mt-1">Current Password</label>
                                    <div className="col-sm-6">
                                        <input type="password" className="form-control" id="inputPassword3" />
                                    </div>
                                </div>
                                <div className="row mt-4 ">
                                    <label for="inputPassword3" className="col-sm-2 col-form-label mt-1">New Password</label>
                                    <div className="col-sm-6">
                                        <input type="password" className="form-control" id="inputPassword3" />
                                    </div>
                                </div>
                                <div className="row mt-4 ">
                                    <label for="inputPassword3" className="col-sm-2 col-form-label mt-1">Confirm Password</label>
                                    <div className="col-sm-6">
                                        <input type="password" className="form-control" id="inputPassword3" />
                                    </div>
                                </div>
                                <div className="row mt-3 ">
                                    <div className="col-sm-2 "></div>
                                    <div className="col-sm-6 mt-4">
                                        <button type="button" className="btn btn-lg me-4" style={{ backgroundColor: "#064FB8", color: "white", padding: "10px 80px" }}>Update Password</button>
                                        <button type="button" className="btn btn-outline-secondary mt-md-0 mt-3" style={{ padding: "13px 90px" }}>Reset</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </>
                );
            case 'bank':
                return (
                    <>
                        <div className='p-2 p-md-3'>
                            <div className="row justify-content-between ">
                                <div className="col-12 col-sm-6">
                                    <Link to="/Add-Bank-Account">
                                        <Button variant="secondary" size="lg" active style={{ backgroundColor: "#064FB8" }} className='me-3'>
                                            + Add New
                                        </Button>
                                    </Link>
                                    <Button variant="secondary" size="lg" className='border-0' active style={{ backgroundColor: "#06B871" }}>
                                        <img src={bank} className='  mb-1' alt='' />
                                        Bank Account
                                    </Button>
                                </div>
                                <div className="col-12 col-sm-6 d-flex mt-md-0 mt-3">

                                    <input className="form-control me-3" style={{ width: '60%' }} placeholder="Search here..." />

                                    <Button variant="secondary" size="lg" active style={{ backgroundColor: "#6787B6" }}>
                                        <img src={filter} className=' mb-1' alt='' />
                                        Filter
                                    </Button>
                                </div>
                            </div>
                            <div className='table-responsive'>
                            <table class="table table-hover mt-4">
                                <thead>
                                    <tr>
                                        <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>
                                            <input className="form-check-input me-3 p-2" type="checkbox" value="" id="invalidCheck" required />
                                            <label className="form-check-label mt-1" for="invalidCheck" >
                                                Bank
                                            </label></th>
                                        <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>Account Name</th>
                                        <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>Account Number</th>
                                        <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>Phone Number</th>
                                        <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>Status</th>
                                        <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>Total Withdraw</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ fontSize: "0.9em", }}>
                                        <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                            <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                                DFCU Bank
                                            </label>
                                        </th>
                                        <td className='pt-3'>Bale</td>
                                        <td className='pt-3'>30396324</td>
                                        <td className='pt-3'>+91 2345 233546</td>
                                        <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>
                                        <td className='pt-3'>UGX3437</td>
                                    </tr>
                                    <tr style={{ fontSize: "0.9em", }}>
                                        <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                            <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                                DFCU Bank
                                            </label>
                                        </th>
                                        <td className='pt-3'>Bale</td>
                                        <td className='pt-3'>30396324</td>
                                        <td className='pt-3'>+91 2345 233546</td>
                                        <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>
                                        <td className='pt-3'>UGX3437</td>
                                    </tr>
                                    <tr style={{ fontSize: "0.9em", }}>
                                        <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                            <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                                DFCU Bank
                                            </label>
                                        </th>
                                        <td className='pt-3'>Bale</td>
                                        <td className='pt-3'>30396324</td>
                                        <td className='pt-3'>+91 2345 233546</td>
                                        <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>
                                        <td className='pt-3'>UGX3437</td>
                                    </tr>
                                    <tr style={{ fontSize: "0.9em", }}>
                                        <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                            <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                                DFCU Bank
                                            </label>
                                        </th>
                                        <td className='pt-3'>Bale</td>
                                        <td className='pt-3'>30396324</td>
                                        <td className='pt-3'>+91 2345 233546</td>
                                        <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>
                                        <td className='pt-3'>UGX3437</td>
                                    </tr>
                                    <tr style={{ fontSize: "0.9em", }}>
                                        <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                            <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                                DFCU Bank
                                            </label>
                                        </th>
                                        <td className='pt-3'>Bale</td>
                                        <td className='pt-3'>30396324</td>
                                        <td className='pt-3'>+91 2345 233546</td>
                                        <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>
                                        <td className='pt-3'>UGX3437</td>
                                    </tr>
                                    <tr style={{ fontSize: "0.9em", }}>
                                        <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                            <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                                DFCU Bank
                                            </label>
                                        </th>
                                        <td className='pt-3'>Bale</td>
                                        <td className='pt-3'>30396324</td>
                                        <td className='pt-3'>+91 2345 233546</td>
                                        <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>
                                        <td className='pt-3'>UGX3437</td>
                                    </tr>
                                    <tr style={{ fontSize: "0.9em", }}>
                                        <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                            <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                                DFCU Bank
                                            </label>
                                        </th>
                                        <td className='pt-3'>Bale</td>
                                        <td className='pt-3'>30396324</td>
                                        <td className='pt-3'>+91 2345 233546</td>
                                        <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>
                                        <td className='pt-3'>UGX3437</td>
                                    </tr>
                                    <tr style={{ fontSize: "0.9em", }}>
                                        <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                            <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                                DFCU Bank
                                            </label>
                                        </th>
                                        <td className='pt-3'>Bale</td>
                                        <td className='pt-3'>30396324</td>
                                        <td className='pt-3'>+91 2345 233546</td>
                                        <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>
                                        <td className='pt-3'>UGX3437</td>
                                    </tr>
                                    <tr style={{ fontSize: "0.9em", }}>
                                        <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                            <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                                DFCU Bank
                                            </label>
                                        </th>
                                        <td className='pt-3'>Bale</td>
                                        <td className='pt-3'>30396324</td>
                                        <td className='pt-3'>+91 2345 233546</td>
                                        <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>
                                        <td className='pt-3'>UGX3437</td>
                                    </tr>
                                    <tr style={{ fontSize: "0.9em", }}>
                                        <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                            <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                                DFCU Bank
                                            </label>
                                        </th>
                                        <td className='pt-3'>Bale</td>
                                        <td className='pt-3'>30396324</td>
                                        <td className='pt-3'>+91 2345 233546</td>
                                        <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>
                                        <td className='pt-3'>UGX3437</td>
                                    </tr>
                                    <tr style={{ fontSize: "0.9em", }}>
                                        <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                            <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                                DFCU Bank
                                            </label>
                                        </th>
                                        <td className='pt-3'>Bale</td>
                                        <td className='pt-3'>30396324</td>
                                        <td className='pt-3'>+91 2345 233546</td>
                                        <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>
                                        <td className='pt-3'>UGX3437</td>
                                    </tr>
                                    <tr style={{ fontSize: "0.9em", }}>
                                        <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                            <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                                DFCU Bank
                                            </label>
                                        </th>
                                        <td className='pt-3'>Bale</td>
                                        <td className='pt-3'>30396324</td>
                                        <td className='pt-3'>+91 2345 233546</td>
                                        <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>
                                        <td className='pt-3'>UGX3437</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </>

                );
            case 'wallet':
                return (
                    <>
                        <div className='pt-3 px-1 px-md-5'>
                            <div className='d-flex justify-content-end' style={{ marginTop: "-20px", marginBottom: "30px" }}>

                                <Button variant="secondary" size="lg" onClick={handleLogoutClick} active style={{ backgroundColor: "#064FB8" }} className='px-4'>
                                    Withdraw
                                </Button>
                                <WithdrawModal show={showLogoutModal} onClose={handleLogoutClose} onLogout={handleLogoutConfirm} />



                            </div>
                            <div className="row">

                                <div className="col-12 col-md-5">
                                    <div className={`box bg-primary text-white  mb-4 pt-4 pb-4 rounded d-flex align-items-center`}>
                                        <div className="heading">
                                            <img src={im} alt='' className='ms-5'></img>
                                        </div>
                                        <div className="ms-4">

                                            <div className="number" style={{ fontSize: '40px', fontWeight: "bolder" }}>UGX 158,800</div>
                                            <div className="number mt-3" style={{ fontSize: '40px', fontWeight: "bolder" }}>
                                                <h4>Total Wallet balance</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-7">
                                    <div className={`box bg-success text-white  mb-4 pt-4 pb-4 rounded d-flex align-items-center`}>
                                        <div className="heading">
                                            <img src={im1} alt='' className='ms-5' />
                                        </div>
                                        <div className="ms-4">
                                            <div className="number mt-3" style={{ fontSize: '40px', fontWeight: "bolder" }}>
                                                <h4>Total Withdraw</h4>
                                            </div>
                                            <div className="number" style={{ fontSize: '40px', fontWeight: "bolder" }}>UGX 785,550.00</div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4 className='fw-semibold mt-3'>All Transactions</h4>
                            <div className='table-responsive'>
                                <table class="table table-hover mt-2">
                                    <thead>
                                        <tr>
                                            <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>
                                                <input className="form-check-input me-3 p-2" type="checkbox" value="" id="invalidCheck" required />
                                                <label className="form-check-label mt-1" for="invalidCheck" >
                                                    Bank Account
                                                </label></th>
                                            <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>Tranx Date</th>
                                            <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>Transaction Id</th>
                                            <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>Amount</th>
                                            <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>Balance</th>
                                            <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr style={{ fontSize: "0.9em", }}>
                                            <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                                <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                                    038343546453
                                                </label>
                                            </th>
                                            <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                                            <td className='pt-3'>30396324</td>
                                            <td className='pt-3'>UGX 150,000</td>
                                            <td className='pt-3'>UGX 3437,00</td>
                                            <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>

                                        </tr>
                                        <tr style={{ fontSize: "0.9em", }}>
                                            <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                                <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                                    038343546453
                                                </label>
                                            </th>
                                            <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                                            <td className='pt-3'>30396324</td>
                                            <td className='pt-3'>UGX 150,000</td>
                                            <td className='pt-3'>UGX 3437,00</td>
                                            <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>

                                        </tr>
                                        <tr style={{ fontSize: "0.9em", }}>
                                            <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                                <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                                    038343546453
                                                </label>
                                            </th>
                                            <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                                            <td className='pt-3'>30396324</td>
                                            <td className='pt-3'>UGX 150,000</td>
                                            <td className='pt-3'>UGX 3437,00</td>
                                            <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>

                                        </tr>
                                        <tr style={{ fontSize: "0.9em", }}>
                                            <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                                <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                                    038343546453
                                                </label>
                                            </th>
                                            <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                                            <td className='pt-3'>30396324</td>
                                            <td className='pt-3'>UGX 150,000</td>
                                            <td className='pt-3'>UGX 3437,00</td>
                                            <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>

                                        </tr>
                                        <tr style={{ fontSize: "0.9em", }}>
                                            <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                                <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                                    038343546453
                                                </label>
                                            </th>
                                            <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                                            <td className='pt-3'>30396324</td>
                                            <td className='pt-3'>UGX 150,000</td>
                                            <td className='pt-3'>UGX 3437,00</td>
                                            <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>

                                        </tr>
                                        <tr style={{ fontSize: "0.9em", }}>
                                            <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                                <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                                    038343546453
                                                </label>
                                            </th>
                                            <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                                            <td className='pt-3'>30396324</td>
                                            <td className='pt-3'>UGX 150,000</td>
                                            <td className='pt-3'>UGX 3437,00</td>
                                            <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>

                                        </tr>
                                        <tr style={{ fontSize: "0.9em", }}>
                                            <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                                <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                                    038343546453
                                                </label>
                                            </th>
                                            <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                                            <td className='pt-3'>30396324</td>
                                            <td className='pt-3'>UGX 150,000</td>
                                            <td className='pt-3'>UGX 3437,00</td>
                                            <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>

                                        </tr>
                                        <tr style={{ fontSize: "0.9em", }}>
                                            <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                                <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                                    038343546453
                                                </label>
                                            </th>
                                            <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                                            <td className='pt-3'>30396324</td>
                                            <td className='pt-3'>UGX 150,000</td>
                                            <td className='pt-3'>UGX 3437,00</td>
                                            <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>

                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                );
            default:
                return null;

        }
    };

    return (
        <div className="container-fluid " style={{ marginTop: "70px", }}>
            <ul className="nav nav-tabs row">
                <li className="nav-item col-md-3 col-6">
                    <button className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
                        <h5 className='fw-bold  text-dark'>Profile</h5>
                    </button>
                </li>
                <li className="nav-item col-md-3 col-6">
                    <button className={`nav-link ${activeTab === 'password' ? 'active' : ''}`} onClick={() => setActiveTab('password')}>
                        <h5 className='fw-bold  text-dark'>Change Password</h5>
                    </button>
                </li>
                <li className="nav-item col-md-3 col-6">

                    <button className={`nav-link ${activeTab === 'bank' ? 'active' : ''}`} onClick={() => setActiveTab('bank')}>
                        <h5 className='fw-bold text-dark'>Bank Accounts</h5>

                    </button>
                </li>
                <li className="nav-item col-md-3 col-6">
                    <button className={`nav-link ${activeTab === 'wallet' ? 'active' : ''}`} onClick={() => setActiveTab('wallet')}>
                        <h5 className='fw-bold  text-dark'>Wallets</h5>
                    </button>
                </li>
            </ul>
            <div className="mt-4">{renderContent()}</div>
        </div>
    );
};

export default NavigationAndContent;
