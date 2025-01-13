'use client'
import React, { useEffect, useState } from "react";
import imageCompression from "browser-image-compression";

// Type for StaticImageData (imported images in Next.js)
import Image, { StaticImageData } from "next/image";

interface CompressedImageProps {
  imageUrl: string | StaticImageData;
  className?:string,
  width?:number,
  height?:number,
  alt?:string
}

const CompressedImage: React.FC<CompressedImageProps> = ({ imageUrl , className , alt, height, width}) => {
  const [compressedImage, setCompressedImage] = useState<string | null>(null);

  // Utility function to handle StaticImageData type
  const getImageUrl = (url: string | StaticImageData): string => {
    if (typeof url === "string") {
      return url; // Dynamic URL case
    } else {
      return url.src; // StaticImageData case
    }
  };

  const createImageFileFromUrl = async (url: string) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const file = new File([blob], "image.jpg", { type: blob.type });
    return file;
  };

  useEffect(() => {
    const compressImage = async () => {
      try {
        const imageUrlString = getImageUrl(imageUrl); // Get the image URL as string
        const imageFile = await createImageFileFromUrl(imageUrlString);

        // Compress the image file
        const compressedFile = await imageCompression(imageFile, {
          maxSizeMB: 0.5, // Limit to 500KB
          maxWidthOrHeight: 1024, // Limit width or height to 1024px
        });

        // Convert the compressed image file to a URL
        const compressedImageUrl = URL.createObjectURL(compressedFile);
        setCompressedImage(compressedImageUrl);
      } catch (error) {
        console.error("Error compressing image:", error);
      }
    };

    compressImage();
  }, [imageUrl]);

  return (
    <div>
      {compressedImage && (
        <Image height={height} width={width}  src={compressedImage} alt={alt ?? 'Image'} className={className} />
      )}
    </div>
  );
};

export default CompressedImage;
