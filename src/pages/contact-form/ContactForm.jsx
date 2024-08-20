import React from 'react'
import './ContactForm.scss'

export const ContactForm = () => {
    return (
        /* From Uiverse.io by somshri16 */
        <div className='contact-form-container'>
            <div class="form-container">
                <form class="form">
                    <div class="form-group">
                        <label for="email">Name</label>
                        <input required="" name="email" id="email" type="text" />
                    </div>
                    <div class="form-group">
                        <label for="textarea">How Can We Help You?</label>
                        <textarea required="" cols="50" rows="10" id="textarea" name="textarea">          </textarea>
                    </div>
                    <button type="submit" class="form-submit-btn">Submit</button>
                </form>
            </div>
        </div>
    )
}
