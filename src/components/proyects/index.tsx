import React from 'react'
import TitleSection from '../title-section'
import Card from './card'

const ProyectsView = () => {
  return (
    <div id='Works' className='min-h-screen flex items-center justify-center'>
      <div className='px-10'>
        <TitleSection sectionNumber='03' sectionTitle="Thing That I've build " />
        <Card/>
      </div>
    </div>
  )
}

export default ProyectsView