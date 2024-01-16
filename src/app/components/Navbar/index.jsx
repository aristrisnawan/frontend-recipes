import React from 'react'
import Image from 'next/image'
import salad from '../../../images/salad.png'

const Navbar = () => {
  return (
    <header className=' bg-yellow-300 fixed w-full sm:px-5'>
        <div className='flex md:flex-row flex-row justify-between md:items-center p-4 gap-2'>
            <Image src={salad} alt='icon' className=' h-7 w-7'/>
            <div>MyMenu</div>
        </div>
    </header>
  )
}

export default Navbar
