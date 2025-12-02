import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'

const Header = () => {
  return (
    <div className='flex items-center w-full p-4 bg-gray-800 text-white'>
        <Logo />
        <Navbar />
    </div>
  )
}

export default Header