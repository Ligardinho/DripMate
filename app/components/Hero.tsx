import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-row mt-[120px] gap-[100px]">
      <div className='flex flex-col'>
        <h1 className='font-semibold text-6xl'>Match the outfits in <br/>your wardrobe with <br/>just a picture.</h1>
        <p className='mt-7 text-gray-500'>
          Introducing DripMate AI, the AI-powered app that simplifies outfit creation. <br/>Snap a photo of your clothes, 
           and DripMate instantly suggests perfectly <br/>matched outfits and individual pieces.
           Discover new combinations and <br/>build your ideal wardrobe effortlessly!
        </p>
        <div className='flex flex-row justify-between'>
        <input placeholder='Name' className='border-2 border-gray-700 w-[200px] pl-2 py-2 rounded-lg mt-5'></input>
        <input placeholder='Email' className='border-2 border-gray-700 w-[250px] pl-2 py-2 rounded-lg mt-5'></input>
        <button className='py-2 px-8 mt-5 bg-black text-white rounded-lg'><a href=''>Submit</a></button>
        </div>
      </div>
      <div className='w-[480px]'>
        <img src=''></img>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Hero