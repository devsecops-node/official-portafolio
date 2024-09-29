import React from 'react'
import InfoAbout from './info'
import Image from 'next/image'

const AboutView = () => {
  return (
    <div id='About' className='h-screen flex justify-center items-center'>
      <div className='w-[80%] md:w-[50%] gap-3 md:gap-0  flex flex-col md:flex-row'>
        <InfoAbout />
        <div className='flex justify-center items-center flex-1'>
          <Image
            src='/imagenes/linux.png'
            width={200}
            height={200}
            alt='linux image'
          />
        </div>
      </div>
    </div>
  )
}

export default AboutView