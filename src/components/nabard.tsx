import React from 'react'
import Links from './presentation/links'
import SeeResume from './presentation/button-see-resume'

const Navbard = () => {
  const links = [
    {
      id: 1,
      name: "About",
    },
    {
      id: 2,
      name: "Experience",
    },
    {
      id: 3,
      name: "Works",
    },
    {
      id: 4,
      name: "Contact",
    }
  ]
  return (
    <nav className=' flex justify-between px-10 py-5 '>
      <section className=''>
        <p className='font-ppMedium'>Logo</p>
      </section>
      <section className='flex gap-3 items-center '>
        {links.map((link) => (
          <Links key={link.id} id={link.id} name={link.name} />
        ))}
        <SeeResume />
      </section>
    </nav>
  )
}

export default Navbard