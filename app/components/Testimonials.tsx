import React from 'react' 
import Image from 'next/image'

const Testimonials = () => {
  return (
    <div className='mt-[150px] flex flex-col justify-center items-center'>
        <h1 className='font-semibold text-2xl text-gray-400 mb-10'>Used by these amazing people:</h1>
        <div className='flex flex-row gap-20'>
            <Image 
                alt='your mom'
                style={{ objectFit: 'cover' }}
                width={100}
                height={100}
                src='/ash.jpg'
                className='h-[100px] border-2 border-gray-700 rounded-full overflow-hidden'
            />
            <Image 
                alt='your mom'
                style={{ objectFit: 'cover' }}
                width={100}
                height={100}
                src='/bas.jpg'
                className='h-[100px] border-2 border-gray-700 rounded-full overflow-hidden'
            />
            <Image 
                alt='your mom'
                style={{ objectFit: 'cover' }}
                width={100}
                height={100}
                src='/bbs.jpg'
                className='h-[100px] border-2 border-gray-700 rounded-full overflow-hidden'
            />
            <Image 
                alt='your mom'
                style={{ objectFit: 'cover' }}
                width={100}
                height={100}
                src='/aaa.jpg'
                className='h-[100px] border-2 border-gray-700 rounded-full overflow-hidden'
            />
            <Image 
                alt='your mom'
                style={{ objectFit: 'cover' }}
                width={100}
                height={100}
                src='/bds.jpg'
                className='h-[100px] border-2 border-gray-700 rounded-full overflow-hidden'
            />
            <Image 
                alt='your mom'
                style={{ objectFit: 'cover' }}
                width={100}
                height={100}
                src='/abs.jpg'
                className='h-[100px] border-2 border-gray-700 rounded-full overflow-hidden'
            />
        </div>
    </div>
  )
}

export default Testimonials