import React from 'react'
import Navbar from './components/Navbar'
import HeroSlider from './components/Hero'
import CouponSection from './components/CouponSection'
import LoyaltySection from './components/LoyaltySection'
import SocialPages from './components/SocialPage'
import ImageSlider from './components/ImageSlider'
import InstagramSection from './components/InstagramSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSlider/>
      <CouponSection/>
      <br></br>
      
      <hr></hr>
      <LoyaltySection/>
      <SocialPages/>
      <ImageSlider/>
      <InstagramSection/>
      <Footer/>
      
    </div>
  )
}

export default App
