
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import ForgotPasswordPage from './Pages/ForgotPasswordPage';
// import WellComeBackPage from './Pages/WellComeBackPage';
import DashboardHome from './Pages/DashboardHome';
import PatientManagementPage from './Pages/PatientManagementPage';
import PataintMana from './Pages/PataintMana';
import DepossiiitPage from './Pages/DepossiiitPage';
import SerVicessssPage from './Pages/SerVicessssPage';
import ReportNewPage from './Pages/ReportNewPage';
import AddNew from './Pages/AddNew';
import PatientNew from './Pages/PatientNew';
//import RegistrationPage from './Pages/RegistrationPage';
//import OTP from './Components/Dashboardhome/OTP';
//import Button from 'react-bootstrap/Button';
//import { useState } from 'react';
// import CreatingPasswordPage from './Pages/CreatingPasswordPage';

function App() {
  // const [modalShow, setModalShow] = useState(false);

  // const openModal = () => {
  //   setModalShow(true);
  // };

  // const closeModal = () => {
  //   setModalShow(false);
  // };

  return (
    <>
      {/* <WellComeBackPage />
      <ForgotPasswordPage />
      <CreatingPasswordPage /> */}
      {/* <RegistrationPage /> */}

      {/* <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mt-5">
            <button className="btn btn-primary" onClick={openModal}>Open OTP Modal</button>
          </div>
        </div>
        <OTP show={modalShow} handleClose={closeModal} />
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<DashboardHome />} />
          <Route path="/patient-Management" element={<PataintMana />} />
           <Route path="/Deposite-Management" element={<DepossiiitPage/>} />
           <Route path="/service-Management" element={<SerVicessssPage />} />
          {/* <Route path="/Support/Chart-Managementt" element={<AboutPage />} /> */}
          <Route path="/Reports-Management" element={<ReportNewPage />} />
          <Route path="/AddServicemanagement" element={<AddNew/>} />
          <Route path="/Patient-report" element={<PatientNew/>} />
          {/* <Route path="/blog" element={<BLogPage />} />   */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
