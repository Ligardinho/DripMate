import React from 'react'

const CTA = () => {
  return (
    <div className='w-[1000px] h-[320px] bg-black rounded-xl mt-[80px] flex flex-col justify-center items-center'>
        <h1 className='text-white text-6xl'>Try DripMate today.</h1>
        <p className='text-gray-400 text-xl mt-6'>Match your outfits with just a picture.</p>
        <button className='bg-white px-4 py-2 rounded-2xl mt-6'><a href=''>Get Started</a></button>
    </div>
  )
}

export default CTA