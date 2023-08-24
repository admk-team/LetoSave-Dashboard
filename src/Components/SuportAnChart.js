import React from 'react'
import Form from 'react-bootstrap/Form';


const SuportAnChart = () => {
    return (
        <>
            <div className='helo' style={{marginTop:"700px"}} >
                <Form style={{ maxWidth: "600px", margin: "0 auto" }}>
                    <div className="chat-input">
                        <input
                            type="text"
                            placeholder="Typing"
                            aria-label="Type your message"
                        />

                    </div>
                </Form>
            </div>
        </>
    )
}

export default SuportAnChart
