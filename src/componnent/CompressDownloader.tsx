'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import JSZip from 'jszip';

interface CompressedImage {
    url: string;
    fileName: string;
}

const ImageCompressor: React.FC = () => {
    const [compressedImages, setCompressedImages] = useState<CompressedImage[]>([]);
    const [quality, setQuality] = useState<number>(70); // Default quality set to 70%

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const compressedFiles: CompressedImage[] = [];
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const compressedBlob = await compressImage(file);
                if (compressedBlob) {
                    const url = URL.createObjectURL(compressedBlob);
                    compressedFiles.push({ url, fileName: file.name });
                }
            }
            setCompressedImages(compressedFiles);
        }
    };

    const compressImage = async (file: File): Promise<Blob | null> => {
        const img = document.createElement('img');
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return null;

        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        return new Promise((resolve) => {
            fileReader.onload = (e) => {
                img.src = e.target?.result as string;
                img.onload = () => {
                    const maxWidth = 800;
                    const maxHeight = 800;
                    let width = img.width;
                    let height = img.height;

                    if (width > height) {
                        if (width > maxWidth) {
                            height *= maxWidth / width;
                            width = maxWidth;
                        }
                    } else {
                        if (height > maxHeight) {
                            width *= maxHeight / height;
                            height = maxHeight;
                        }
                    }

                    canvas.width = width;
                    canvas.height = height;
                    ctx.drawImage(img, 0, 0, width, height);

                    // Check if the file is JPEG or WEBP, and apply quality for compression
                    const isJPEGorWebp = file.type === 'image/jpeg' || file.type === 'image/webp';

                    // Set the quality if it's JPEG or WEBP, otherwise just return as is
                    canvas.toBlob(
                        (blob) => {
                            if (blob) {
                                resolve(blob);
                            } else {
                                resolve(null);
                            }
                        },
                        file.type, // Keep the original file format
                        isJPEGorWebp ? quality / 100 : undefined // Apply quality for JPEG and WEBP
                    );
                };
            };
        });
    };

    const downloadAllImages = async () => {
        if (compressedImages.length > 1) {
            // If there are multiple images, download as ZIP
            const zip = new JSZip();
            compressedImages.forEach((image, index) => {
                fetch(image.url)
                    .then((response) => response.blob())
                    .then((blob) => {
                        zip.file(image.fileName, blob);
                        if (index === compressedImages.length - 1) {
                            zip.generateAsync({ type: 'blob' }).then((content) => {
                                const link = document.createElement('a');
                                link.href = URL.createObjectURL(content);
                                link.download = 'images.zip';
                                link.click();
                            });
                        }
                    });
            });
        } else if (compressedImages.length === 1) {
            // If there is only one image, download it directly
            const image = compressedImages[0];
            const link = document.createElement('a');
            link.href = image.url;
            link.download = image.fileName;
            link.click();
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full text-center">
                <h1 className="text-2xl font-bold mb-4 text-gray-700">Multiple Image Compressor</h1>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    multiple
                    className="border border-gray-300 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                {/* Quality Range Slider */}
                <div className="mb-4">
                    <label htmlFor="quality" className="text-gray-700 font-semibold">Select Image Quality: {quality}%</label>
                    <input
                        type="range"
                        id="quality"
                        min="0"
                        max="100"
                        value={quality}
                        onChange={(e) => setQuality(Number(e.target.value))}
                        className="w-full mt-2"
                    />
                </div>

                {compressedImages.length > 0 && (
                    <div className="mt-6 space-y-4">
                        {/* Swiper Slider for Image Preview */}
                        <Swiper spaceBetween={10} slidesPerView={1} navigation>
                            {compressedImages.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                                        <img
                                            src={image.url}
                                            alt={`Compressed ${image.fileName}`}
                                            className="rounded-lg shadow-md mb-4 max-w-full h-auto"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Download Button */}
                        <button
                            onClick={downloadAllImages}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 mt-6"
                        >
                            {compressedImages.length > 1 ? " Download All Images" : "Download Image"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageCompressor;


