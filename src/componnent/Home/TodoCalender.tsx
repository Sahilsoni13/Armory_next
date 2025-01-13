import React from 'react'
import Calendar from '../Calender'
import CompressedImage from '../ImageComponent'
import image from "@/../public/images/Untitled.jpg"
import Image from 'next/image'
const TodoCalender = () => {
  const images = [
    { id: 1, name: 'Image 1', imageUrl: image },  // Static import (StaticImageData)
    { id: 2, name: 'Image 2', imageUrl: 'https://example.com/images/sample2.jpg' },  // Dynamic URL (string)
  ];
  return (
  <>
  <section className='bg-white py-20'>
  {/* <Calendar/> */}
  <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Compressed Images</h1>
      <div className="space-y-4">
        {/* {images.map((image) => (
          <div key={image.id}>
            <h2 className="text-xl">{image.name}</h2>
          </div>
        ))} */}
        <CompressedImage imageUrl={image} />

        {/* <Image src={image} alt='kjkj' /> */}
      </div>
    </div>
  </section>
  </>
  )
}

export default TodoCalender