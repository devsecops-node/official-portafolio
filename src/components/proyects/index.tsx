import React from 'react'
import TitleSection from '../title-section'
import Card from './card'
import styles from "@/styles/proyects.module.css"
const ProyectsView = () => {
  return (
    <div id='Works' className={`h-screen flex justify-center items-center`}>
      <div className={`w-[80%] md:w-[50%] gap-3 flex flex-col`}>
        <TitleSection sectionNumber='03' sectionTitle='Some Things I’ve Built' />
        <div>
          qweqw
        </div>
      </div>
    </div>
  )
}

export default ProyectsView