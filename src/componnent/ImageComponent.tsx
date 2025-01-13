// components/CompressedImage.tsx
'use client'

import React from 'react';
import useCompressedImage from '@/hooks/useCompressedImage ';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

interface CompressedImageProps {
  imageUrl: string | StaticImageData;
}

const CompressedImage: React.FC<CompressedImageProps> = ({ imageUrl }) => {
  const { compressedImage, isLoading } = useCompressedImage(imageUrl);

//   if (isLoading) return <div>Loading...</div>;

  // If imageUrl is StaticImageData, use its `src` property
  const imageSrc = typeof imageUrl === 'string' ? imageUrl : imageUrl.src;

  return (
    <div className="relative w-full h-auto">
      <Image
        src={compressedImage || imageSrc}
        alt="Compressed Image"
        width={800}
        height={600}
        layout="responsive"
      />
    </div>
  );
};

export default CompressedImage;
