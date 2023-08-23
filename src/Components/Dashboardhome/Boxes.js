import React from 'react';

const Boxes = () => {
    const boxes = [
        { number: 512, heading: 'Expectant Mothers', color: 'bg-danger' },
        { number: 1256234, heading: 'Expeted Revenue', color: 'bg-success' },
        { number: 3256454, heading: 'Total Deposits', color: 'bg-primary' },
        { number: 25, heading: 'Total Delivery', color: 'bg-warning' },
    ];

    return (
        <>
            <div className="container-fluid " style={{marginTop:"80px"}}>
                <div className="row">
                    {boxes.map((box, index) => (
                        <div key={index} className="col-12 col-md-3">
                            <div className={`box ${box.color} text-white text-center mb-4 pt-4 pb-4 rounded`}>
                                <div className="number" style={{fontSize:'40px', fontWeight:"bolder"}}>{box.number}</div>
                                <div className="heading" style={{fontSize:'20px', fontWeight:"bolder"}}>{box.heading}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Boxes;
