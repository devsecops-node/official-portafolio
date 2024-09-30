import React from 'react'
import styles from "@/styles/helpers.module.css"


const InfoFixedRight = () => {
  return (
    <div className={`fixed bottom-0 hidden sm:block right-0 ${styles.apper}`}>
      <div className='flex flex-col items-center gap-2 h-full px-3'>
        <p className={`tracking-[0.1em] text-[12px] text-light_slate ${styles.write_vertical} cursor-pointer transition-all duration-[0.5s] hover:text-primary hover:translate-y-[-5px]`}>jordan.huaman.com</p>
        <div className='bg-light_slate w-[2px] h-[200px]'/>
      </div>
    </div>
  )
}

export default InfoFixedRight