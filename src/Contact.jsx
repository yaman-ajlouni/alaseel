import React from 'react'
import { ContactUs } from './pages/contact-us/ContactUs'
import { ContactForm } from './pages/contact-form/ContactForm'
import { Footer } from './components/footer/Footer'

export const Contact = () => {
  return (
    <div>
      <ContactUs />
      <ContactForm />
      <Footer />
    </div>
  )
}
