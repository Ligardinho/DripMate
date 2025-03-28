import React from 'react'
import { NavigationMenuDemo } from '@/components/ui/Nav'

const Nav = () => {
  return (
    <div className='flex flex-row py-3 gap-[300px]'>
      <h1 className='py-3 font-semibold text-2xl'>DripMate</h1>
      <NavigationMenuDemo/>
      <div className='flex flex-row font-semibold py-3 gap-4'>
      <button><a href=''>Sign In</a></button>
      <button className='border-2 border-black rounded-lg px-4 py-2 hover:text-white hover:bg-black transition-all'><a href=''>Get Demo</a></button>
      </div>      
    </div>
  )
}

export default Nav