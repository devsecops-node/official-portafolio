import React from 'react'
import styles from "@/styles/anchor.module.css"

const Links = ({ name, id }: { name: string, id: number }) => {
  return (
    <div className='relative'>
      <a
        // href={`#${name}`}
        className={`flex font-ppELight text-[12px] opacity-[0.7] tracking-wider hover:opacity-[1] transition-all duration-150 cursor-pointer  ${styles.line}`}>
        <p className='text-[var(--text-primary)] font-ppBold'>0{id}.</p>
        <p>{name}</p>
      </a>
    </div>
  )
}

export default Links