import React from 'react'

const TitleSection = ({ sectionNumber, sectionTitle }: { sectionNumber: string, sectionTitle: string }) => {
  return (
    <section className='flex flex-row text-[25px] opacity-[0.8] gap-2'>
      <p className='text-primary font-ppB'>{sectionNumber}</p>
      <div className='flex flex-row  flex-1 itmes-center gap-3'>
        <p className='font-ppSemiBold'>{sectionTitle}</p>
        <div className="h-full w-full flex-1 flex items-center justify-center">
          <div className='bg-[#8e98a7] h-[1px] flex-1' />
        </div>
      </div>
    </section>
  )
}

export default TitleSection