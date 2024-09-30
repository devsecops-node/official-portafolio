import React from 'react'
import List from './list'
import styles from "@/styles/presentation.module.css"

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
        <p >Hello! My name is Jordan and I enjoy creating things Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam assumenda dolorem quisquam eaque pariatur quis tempore! Deleniti, ea architecto, officiis deserunt dolorem vero iure itaque debitis fugiat saepe ut repudiandae.</p>
        <p className='mt-3'>Until now, i was interesing in learning more tecnical and soft skill, enjoy learning and make thing more easly. Recenly i was in a free proyect in the <span className='text-primary font-ppBold'>IEEE</span> where I had the oportunity working in <span className='text-primary font-ppBold '>Teams</span> and I develop my soft skills and my tecnical also.</p>
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