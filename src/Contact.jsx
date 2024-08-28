import React, { useEffect } from 'react'
import { ContactUs } from './pages/contact-us/ContactUs'
import { ContactForm } from './pages/contact-form/ContactForm'
import { Footer } from './components/footer/Footer'
import { WhiteNavBar } from './components/white-navbar/WhiteNavBar'

export const Contact = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <WhiteNavBar />
      <ContactUs />
      <ContactForm />
      <Footer />
    </div>
  )
}
