"use client"
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import InfoAbout from './info'
import Image from 'next/image'
import styles from "@/styles/presentation.module.css"

const AboutView = () => {

  let { apper } = useIntersectionObserver({ observar: 'about' })


  return (
    <div id='about' className={`h-screen flex justify-center items-center ${apper ? styles.main : "opacity-0"}`}>
      <div id='About' hidden className={`w-[80%] md:w-[50%] gap-3 md:gap-0  flex flex-col md:flex-row`}>
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