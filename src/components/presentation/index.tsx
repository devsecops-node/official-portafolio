import React from 'react'
import Navbard from '../nabard'
import Main from './main'

const PresentationView = () => {
  return (
    <div className='h-screen max-h-screen flex flex-col'>
      <Navbard/>
      <Main/>
    </div>
  )
}

export default PresentationView