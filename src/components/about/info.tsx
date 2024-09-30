import React from 'react'
import List from './list'
import styles from "@/styles/presentation.module.css"
import TitleSection from '../title-section'

const InfoAbout = () => {


  const skills = ["Javascipt (ES6+)", "Typescript", "React (Nextjs)", "Node.js", "Java", "Logarithms", "Linux", "DevOps+-"]

  return (
    <div className={`flex md:w-[50%] flex-col gap-2`}>
      <section className='flex flex-row text-[25px] opacity-[0.8] gap-2'>
        <p className='text-primary font-ppB'>01.</p>
        <div className='flex flex-row  flex-1 itmes-center gap-3'>
          <p className='font-ppSemiBold'>About me</p>
          <div className="h-full w-full flex-1 flex items-center justify-center">
            <div className='bg-[#8e98a7] h-[1px] flex-1' />
          </div>
        </div>
      </section>
      <section className='text-[#8e98a7] text-[14px] tracking-wider'>
        <p>I am an aspiring software engineer especially in building things (and occasionally designing) exceptional digital experiences. Currently, I'm focused on learning new things and developing my career.</p>
      </section>
      <section className='grid grid-cols-2'>
        {skills.map((s) => (
          <List key={s} label={s} />
        ))}
      </section>
    </div>
  )
}

export default InfoAbout