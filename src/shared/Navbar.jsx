import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black'>
        <ul className='flex items-center gap-4 text-amber-100'>
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </nav>
  )
}

export default Navbar