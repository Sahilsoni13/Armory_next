'use client'

import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('../MapComponent'), { ssr: false });

const MapSection = () => (
  <div>
    <h1>Google Maps with Full Features in Next.js</h1>
    <MapComponent />
  </div>
);

export default MapSection;
