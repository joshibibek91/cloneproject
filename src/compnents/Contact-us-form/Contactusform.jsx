import React from 'react'

import { useState } from 'react'

import "./stylecontactusform.scss"

function Contactusform() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        console.log(formData);
    };


    return (
        <>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-row1">
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Name *" />
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email *" />
                    </div>
                    <div className="form-row2">
                        <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Subject *" />
                    </div>
                    <div className="form-row3">
                        <textarea name="message" value={formData.message} onChange={handleChange} rows="5" required placeholder="Your Message... *"></textarea>
                    </div>
                    <div className="form-row4">
                        <button type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contactusform
