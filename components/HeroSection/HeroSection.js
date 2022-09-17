import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

function HeroSection() {
  return (
    <div className='mt-20 grid grid-cols-1 md:grid-cols-2 justify-between container'>
        <HeroLeft/>
        <HeroRight />
    </div>
  )
}

export default HeroSection