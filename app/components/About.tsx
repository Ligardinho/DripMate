import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div>
    <div className='mt-[150px] w-[1200px] h-[500px] rounded-xl bg-[#E2E8F0] flex flex-row items-center justify-center gap-30'>
        <div className='flex flex-col gap-4 px-[40px]'>
            <h1 className='font-semibold text-[40px]'>How does DripMate work?</h1>
            <p>When you analyze your clothing with DripMate, many things happen. First, the camera on your phone will capture the details and structure of your garment. 
               Using that information, our AI model, which was trained on thousands of clothing images, will identify the different parts and their characteristics. Finally, 
               our multimodal AI model will take everything in and finalize the results: 
               figuring out the material composition, style classification, key features, and potential care instructions for your clothing item.</p>
        </div>
        <Image
            src={'/em.jpg'}
            width={450}
            height={450}
            alt='your mom'
            className='rounded-xl mr-10'
        />
    </div>
    </div>
  )
}

export default About