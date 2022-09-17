import React from 'react'

function HeroLeft() {
  return (
    <div className='flex flex-col gap-3'>
        <h2 className='text-light-white text-6xl font-semibold leading-tight'>Explore, buy, and sell exceptional NFTs.</h2>
        <p className='text-2xl leading-snug'>Its crafted with the latest trend of design  coded with all modern approaches.</p>
        <div className='flex'>
            <button className='blue-button'>Explore Now</button>
            <button className='transparent-button'>All Collection</button>
        </div>
    </div>
  )
}

export default HeroLeft