import Image from 'next/image'
import React from 'react'
import { CardImage } from './card-image'
import CardInfo from './card-info'

const Card = () => {
  return (
    <div className='relative mt-[20px] flex flex-row gap-2'>
      <CardImage />
      <CardInfo />
    </div>
  )
}

export default Card