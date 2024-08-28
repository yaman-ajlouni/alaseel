import React, { useEffect } from 'react'
import { WhiteNavBar } from './components/white-navbar/WhiteNavBar'
import { RetailIntro } from './pages/retail-intro/RetailIntro'
import { RetailMenu } from './pages/retailMenu/RetailMenu'
import { RetailGallery } from './pages/retail-gallery/RetailGallery'
import { Footer } from './components/footer/Footer'

export const Retail = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <WhiteNavBar />
      <RetailIntro />
      <RetailMenu />
      <RetailGallery />
      <Footer />
    </div>
  )
}
