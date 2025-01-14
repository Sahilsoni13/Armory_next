import React from 'react'
import Calendar from '../Calender'
import image from "@/../public/images/Untitled.jpg"
import Image from 'next/image'
import CompressedImage from '../CompressedImage'
import image2 from "@/../public/images/warroom.jpg"
const TodoCalender = () => {
  return (
    <>
      <section className='bg-white py-20'>
        <Calendar/>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-6">Compressed Images</h1>
          <CompressedImage height={1000} width={500} imageUrl={image2} />
          <Image src={image2} alt='image' />
        </div>
      </section>
    </>
  )
}

export default TodoCalender