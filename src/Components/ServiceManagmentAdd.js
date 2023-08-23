import React from 'react'

import Form from 'react-bootstrap/Form';


const ServiceManagmentAdd = () => {
    return (
        <>
            <div className="container " style={{ marginTop: "50px" }}>
                <Form style={{ maxWidth: "600px", margin: "0 auto" }}>
                    <Form.Group className="mb-4" >
                        <Form.Label>Service Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Label >Ward Type</Form.Label>
                    <Form.Select size="lg" className="mb-4">
                        <option>Please select</option>
                    </Form.Select>
                    <Form.Label>Room Type</Form.Label>
                    <Form.Select size="lg" className="mb-4">
                        <option>Please select</option>
                    </Form.Select>
                    <Form.Label>Delivery Type</Form.Label>
                    <Form.Select size="lg" className="mb-4">
                        <option>Please select</option>
                    </Form.Select>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Service Description</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Type here..." />
                    </Form.Group>
                    <label for="basic-url" className="form-label">Cost</label>
                    <div className="input-group mb-4">
                        <span className="input-group-text px-4" id="basic-addon3" style={{ backgroundColor: "#064FB8", color: "white" }}>UGX</span>
                        <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                    </div>
                    <div>
                        <label for="basic-url" className="form-label">Includes Postnatal Care</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label className="form-check-label" for="inlineCheckbox1">Yes</label>
                    </div>
                    <div className="form-check form-check-inline mb-4">
                        <input className="form-check-input " type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label className="form-check-label" for="inlineCheckbox2">No</label>
                    </div>
                    <div className="d-grid gap-2 ">
                        <button className="btn btn-primary btn-lg" type="button" style={{backgroundColor:"#064FB8"}}>Save</button>
                        
                    </div>
                </Form>
            </div>
        </>
    )
}

export default ServiceManagmentAdd
