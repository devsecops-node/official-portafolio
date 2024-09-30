import React from 'react'
import styles from "@/styles/helpers.module.css"
import { Github, Instagram, Linkedin, SquareArrowOutUpRight, Twitter } from 'lucide-react'


const InfoFixedLeft = () => {
  return (
    <div className={`fixed bottom-0 left-0 hidden sm:block px-[10px]  ${styles.apper}`}>
      <div className='flex flex-col items-center gap-2 h-full px-3'>
        <section className='flex gap-3 flex-col'>
          <Github className='text-light_slate transition-all duration-[0.5s] hover:text-primary cursor-pointer hover:translate-y-[-5px]' size={23} />
          <Instagram className='text-light_slate transition-all duration-[0.5s] hover:text-primary cursor-pointer hover:translate-y-[-5px]' size={23} />
          <Twitter className='text-light_slate transition-all duration-[0.5s] hover:text-primary cursor-pointer hover:translate-y-[-5px]' size={23} />
          <Linkedin className='text-light_slate transition-all duration-[0.5s] hover:text-primary cursor-pointer hover:translate-y-[-5px]' size={23} />
          <SquareArrowOutUpRight className='text-light_slate transition-all duration-[0.5s] hover:text-primary cursor-pointer hover:translate-y-[-5px]' size={23} />
        </section>
        <div className='bg-light_slate w-[2px] h-[200px]' />
      </div>
    </div>
  )
}

export default InfoFixedLeft