'use client'
import React from 'react';
import dynamic from 'next/dynamic';
const MapComponent = dynamic(() => import('../MapComponent'), {
  ssr: false,
});
const MapSection = () => {
  return (
   <>
   <section>
    <MapComponent/>
   </section>
   </>
  )
}

export default MapSection