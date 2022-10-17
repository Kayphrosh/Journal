import React from 'react'
import Heroe from './Heroe'
import HowItWorks from './HowItWorks'
// import About from './About'
import RecentlyPublished from './RecentlyPublished'
import Faq from './Faq'
import Newsletter from './Newsletter'
import Footer from '../../components/Footer/Footer'
const HomePage = () => {
  return (
    <>
    <Heroe /> 
    <HowItWorks />
    {/* <About /> */}
    <RecentlyPublished  />
    <Faq />
    <Newsletter />
    <Footer />
    </>
  )
}

export default HomePage
