import Image from 'next/image'
import React from 'react'
import styles from "@/styles/proyects.module.css"

export const CardImage = () => {
  return (
    <section className={`max-w-[55%] relative block rounded-md opacity-[0.9] ${styles.card_image}`}>
      <Image
        src={'/imagenes/todo.png'}
        alt='image-rendered'
        width={700}
        height={800}
        sizes=''
        className='rounded-md z-20'
      />
    </section>
  )
}

// #a8b2d1