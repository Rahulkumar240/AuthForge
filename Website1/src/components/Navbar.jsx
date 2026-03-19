import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black text-white flex justify-between px-8 py-4'>
        <div className='items-center flex font-mono'>
            <h1>SAMPLE WEBSITE 1</h1>
        </div>
        <div>
            <ul className='flex gap-4 font-light'>
                <li className='border-2 px-4 py-2 hover:bg-white hover:text-black'>Home</li>
                <li className='border-2 px-4 py-2 hover:bg-white hover:text-black'>About</li>
                <li className='border-2 px-4 py-2 hover:bg-white hover:text-black'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar