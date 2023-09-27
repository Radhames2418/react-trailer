import React from 'react'
import SectionSlider from './SectionSlider'

export default function () {
  return (
    <div className='mx-auto my-14 md:my-7 lg:my-24 flex flex-col-reverse lg:flex-row h-full p-3 gap-5 lg:gap-24'>

      <div className='lg:w-56 flex items-center justify-center'>
        <p className='stroke text-center lg:-rotate-90 lg:scale-y-150 text-5xl md:text-7xl lg:text-9xl font-black tracking-widest	text-yellow-400'>
          CINEMA
        </p>
      </div>

      <div className='lg:w-9/12'>
        <SectionSlider genero={'comedia'} />

        <SectionSlider genero={'terror'} />

        <SectionSlider genero={'acción'} />
      </div>
    </div>
  )
}
