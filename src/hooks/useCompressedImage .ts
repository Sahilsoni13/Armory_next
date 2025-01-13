// hooks/useCompressedImage.ts
'use client'

import { useState, useEffect } from 'react';
import { StaticImageData } from 'next/image';

type ImageUrl = string | StaticImageData;

const useCompressedImage = (imageUrl: ImageUrl) => {
  const [compressedImage, setCompressedImage] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const compressImage = () => {
      // Create a new Web Worker and point to the worker in the public/worker directory
      const worker = new Worker('/worker/compressWorker.js');

      worker.onmessage = (e) => {
        const result = e.data;
        if (result === 'error') {
          console.error('Compression failed');
          setIsLoading(false);
          return;
        }
        setCompressedImage(result);
        setIsLoading(false);
      };

      const options = {
        maxSizeMB: 0.5,  // 500KB limit
        maxWidthOrHeight: 800,
        useWebWorker: true,
      };

      let url = '';

      if (typeof imageUrl === 'string') {
        url = imageUrl;
      } else if (imageUrl && (imageUrl as StaticImageData).src) {
        url = (imageUrl as StaticImageData).src;
      }

      worker.postMessage({ imageUrl: url, options });

      return () => {
        worker.terminate();
      };
    };

    if (imageUrl) {
      compressImage();
    }
  }, [imageUrl]);

  return { compressedImage, isLoading };
};

export default useCompressedImage;
