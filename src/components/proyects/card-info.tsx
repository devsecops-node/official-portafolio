import { Github, SquareArrowOutUpRight } from 'lucide-react'
import React from 'react'

const CardInfo = () => {
  return (
    <section className='flex ml-auto flex-col'>
      <div className='flex flex-col items-end'>
        <p className='text-primary text-[13px]'>Feature Proyect</p>
        <h1 className='font-ppSemiBold text-[25px]'>Todo App</h1>
      </div>
      <div className='absolute max-w-[600px] shadow-md px-7 py-2 h-auto max-h-[170px  ] right-0 top-[25%] bg-[#112240] rounded-md'>
        <p className='text-end text-[20px] tracking-wide text-secundary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat itaque ducimus rerum neque aspernatur perspiciatis, odit velit sequi recusandae beatae ullam modi!</p>
      </div>
      <div className='flex flex-col mt-auto gap-2'>
        <div className=' flex gap-2 text-[#909bb8] text-[13px]'>
          <p>Javascript</p>
          <p>Node.js</p>
          <p>Tailwindcss</p>
          <p>Vs Code</p>
          <p>Animationjs</p>
          <p>Next.js</p>
        </div>
        <div className='flex justify-end'>
          <Github className='text-[#909bb8] hover:text-[#5deccc] cursor-pointer transition-all duration-150' />
          <SquareArrowOutUpRight className='text-[#909bb8] hover:text-[#5deccc] cursor-pointer transition-all duration-150' />
        </div>
      </div>
    </section>
  )
}

export default CardInfo