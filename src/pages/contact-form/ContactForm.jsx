import React, { useState } from 'react'
import './ContactForm.scss'

export const ContactForm = () => {
    const [textareaValue, setTextareaValue] = useState('');

    return (
        /* From Uiverse.io by somshri16 */
        <div className='contact-form-container'>
            <div className="form-container">
                <form className="form">
                    <div className="form-group">
                        <label htmlFor="email">Name</label>
                        <input required="" name="email" id="email" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="textarea">How Can We Help You?</label>
                        <textarea
                            required
                            cols="50"
                            rows="10"
                            id="textarea"
                            name="textarea"
                            value={textareaValue}
                            onChange={(e) => setTextareaValue(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="form-submit-btn">Submit</button>
                </form>
            </div>
        </div>
    )
}
