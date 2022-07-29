import React from 'react'

function Contact() {
return (
    <div id='contact-pg'>
        <h1 className='title'>CONTACT ME!</h1>
        <div>
            <label className='label'>Name</label>
            <input type="text" className='input' placeholder='Enter your name'/>
        </div>
        <div>
            <label className='label'>Email</label>
            <input type="email" className='input' placeholder='Enter your email'/>
        </div>
        <div>
            <label className='label'>Date</label>
            <input type="text" className='input' placeholder='Enter the date'/>
        </div>

        <button id='button'>SUBMIT</button>

    </div>
)
}
export default Contact;
