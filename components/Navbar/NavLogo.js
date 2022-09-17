import Image from 'next/image'
import React from 'react'

function NavLogo() {
  return (
    <div className='flex gap-2 font-extrabold text-2xl'>
        <Image src="/color-wheel.png" width="40" height={40} alt="logo" />
        <h1 className='text-white py-auto'>ColorsSpy</h1>
    </div>
  )
}

export default NavLogo