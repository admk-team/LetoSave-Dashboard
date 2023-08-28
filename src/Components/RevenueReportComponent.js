import React from 'react'
import dognot from "../Components/Images/Untitled design (2).png"
import str from "../Components/Images/Untitled design (3).png"
import str1 from "../Components/Images/Untitled design (4).png"
import str2 from "../Components/Images/Untitled design (5).png"

const RevenueReportComponent = () => {
  const boxes = [
    { number: "UGX 1,500,000", heading: 'Expected Revenue', color: 'bg-primary' },
    { number: "UGX 950,000", heading: 'Revenue Recieved', color: 'bg-success' },
    { number: "UGX 550,000", heading: 'Total Pending', color: ' bg-danger' },

  ];
  return (
    <>
      <div className="container-fluid p-4 p-md-5" style={{ marginTop: "40px" }}>
        <div className="row">
          {boxes.map((box, index) => (
            <div key={index} className="col-12 col-md-4">
              <div className={`box ${box.color} text-white text-center mb-4 py-4 rounded`}>
                <div className="number" style={{ fontSize: '33px', fontWeight: "bolder" }}>{box.number}</div>
                <div className="heading mt-3" style={{ fontSize: '17px', fontWeight: "600" }}>{box.heading}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="row g-5 mt-1">
          <div className="col-md-6">
            <div className="card mb-4 border-0">
              <div className="card-header d-flex justify-content-between align-items-center" >

                <div >
                  <h5 className='fw-semibold '>Revenue by months</h5>
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
                  <h5 className='fw-semibold'>Revenue by services</h5>
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
                    Revenue by service by months
                  </h5>
                </div>
                <div className="d-flex align-items-center">
                  <select id="inputState" className="form-select">
                    <option selected>Weekly</option>
                    <option>...</option>
                  </select>

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
                  <h5 className='fw-semibold'>Revenue by rooms</h5>
                </div>
                <div className="d-flex align-items-center">

                  <select id="inputState" className="form-select">
                    <option selected>Weekly</option>
                    <option>...</option>
                  </select>
                </div>
              </div>

              <div className=" d-flex justify-content-center mt-4">
                <img src={str2} className='img-fluid' alt='' ></img>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RevenueReportComponent
