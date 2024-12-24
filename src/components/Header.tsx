import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between px-4 shadow-6xl bg-gray-400 h-10 items-center font-semibold'>
        <div>LOGO</div>
    <div className='flex gap-10 text-black font-semibold mr-10'>
      <div className='cursor-pointer'>Home</div>
      <div className='cursor-pointer'>About</div>
      <div className='cursor-pointer'>Services</div>
      <div className='cursor-pointer'>Contact us</div>
    </div>
    </div>
  )
}

export default Header
