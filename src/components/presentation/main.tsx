import React from 'react'
import styles from "@/styles/letteranimaiton.module.css"

const Main = () => {
  const loadInfo = 'Hi,  my name is';
  return (
    <div className='flex-1 flex items-center justify-center flex-col max-w-[800px] mx-auto'>
      <div>
        {/* <p className='text-[14px] tracking-wider text-primary opacity-[0.8]'>Hi,   my name is </p> */}
        <div className={`${styles.container}`}>
          {loadInfo.split('').map((p, key) => (
            <p key={key} className='inline text-[14px] tracking-wider text-primary opacity-[0.8]' >{p}</p>
          ))}
        </div>
        <p className='text-[70px] opacity-[0.8] font-ppSemiBold tracking-tighter'>Jhordan Huaman.</p>
        <p className='text-[60px] opacity-[0.6]'>I Build things for the web</p>
        <div className='max-w-[500px]'>
          <p className='opacity-[0.5] tracking-wide inline'>I am asphiring a software developer, i like to learn new tenologies, exceptional learning thing, reading books and enjoy work in the tech world. I am loogink work new Experiences  </p>
          <span className='text-primary  opacity-[1] font-ppBold'>to beat it.</span>
        </div>
        <button className='px-5 py-4 outline outline-1 outline-[var(--primary)] text-primary opacity-[0.6] mt-[30px] rounded-sm text-[12px] tracking-wider transition-all duration-150 hover:opacity-[0.9]'>Check out my proyects!</button>
      </div>
    </div>
  )
}

export default Main