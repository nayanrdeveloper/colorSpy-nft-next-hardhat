import Image from 'next/image'
import React from 'react'

function HeroRight() {
  return (
    <div>
        <Image src={'/herosection.png'} alt="hero_section" height={500} width="800" />
    </div>
  )
}

export default HeroRight