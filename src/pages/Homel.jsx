import React from 'react'
import Faqs from '../Components/Faqs/Faqs'
import Features from '../Components/Features/Features'
import Footers from '../Components/Footer/Footers'
import HomeHero from '../Components/HomeHero'
import Subsribe from '../Components/Subsribe'

function Homel() {
  return (
    <div className='relative'>
      <HomeHero/>
      <Features/>
      <Faqs/>
      <Subsribe/>
      <Footers/>
    </div>
  )
}

export default Homel