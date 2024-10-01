import React from 'react'
import { IProyect } from '@/helper'
import Image from 'next/image'
import helper from '@/styles/helpers.module.css'
import { Github, SquareArrowOutUpRight } from 'lucide-react'


const Card = ({ proyect }: { proyect: IProyect }) => {
  return (
    <div className={`flex relative max-w-[1000px] ${helper.bg_green} rounded-lg`}>
      <Image
        src={proyect.src}
        width={700}
        height={700}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={proyect.title}
        className={` bg-transparent z-0 rounded-[6px]`}
      />
      <div className='absolute z-50 px-[40px] py-[20px] flex justify-center items-center h-full'>
        <div className='flex flex-col md:gap-3'>
          <section>
            <h1 className={`text-green font-mono tracking-tighter ${helper.title_2}`}>Feature Proyect</h1>
            <h3 className={`${helper.title_3} font-bold tracking-tighter`}>{proyect.title}</h3>
          </section>
          <p className='text-light_slate text-[13px] md:text-[15px] overflow-y-hidden line-clamp-3'>{proyect.description}</p>
          <div className='hidden md:flex gap-2'>
            {proyect.tecnologies.map((t)=>(
              <p className='text-[12px] text-lightest_slate bg-secundary shadow-md hover:shadow-2xl transition-all duration-[0.5s] cursor-pointer px-2 rounded-sm'  key={t}>{t}</p>
            ))}
          </div>
          <div className='flex gap-2'>
            <Github className='text-lightest_slate hover:text-green cursor-pointer transition-all duration-150' />
            <SquareArrowOutUpRight className='text-lightest_slate hover:text-green cursor-pointer transition-all duration-150' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card