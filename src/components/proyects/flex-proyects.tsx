import proyects from '@/helper'
import React from 'react'
import Card from './card';

const FlexProyects = () => {
  const loadedProyects = proyects;
  return (
    <div className=' flex flex-col gap-4 max-w-[1000px]'>
      {loadedProyects.map((proyect) => (
        <Card proyect={proyect} key={proyect.id} />
      ))}
    </div>
  )
}

export default FlexProyects