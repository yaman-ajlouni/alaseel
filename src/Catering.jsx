import React, { useEffect } from 'react'
import { WhiteNavBar } from './components/white-navbar/WhiteNavBar'
import { CateringIntro } from './pages/cateringIntro/CateringIntro'
import { CateringMenu } from './pages/cateringMenu/CateringMenu'
import Logo from './components/logo/Logo'
import { CateringGallery } from './pages/cateringGallery/CateringGallery'
import { Footer } from './components/footer/Footer'

export const Catering = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <WhiteNavBar />
      <CateringIntro />
      <CateringMenu />
      {/* <Logo /> */}
      <CateringGallery />
      <Footer />
    </div>
  )
}
