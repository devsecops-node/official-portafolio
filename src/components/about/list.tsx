import React from 'react'

const List = ({ label }: { label: string }) => {
  return (
    <div className='tracking-wide flex gap-1 flex-row text-[#8e98a7] text-[13px]'>
      <span>.</span>
      <p>{label}</p>
    </div>
  )
}

export default List