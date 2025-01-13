// public/compressWorker.js
self.onmessage = async (e) => {
  const { imageUrl, options } = e.data;

  try {
    console.log("Starting compression...", imageUrl);

    const image = new Image();
    image.src = imageUrl;

    image.onload = async () => {
      console.log("Image loaded, starting compression...");

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        console.error("Failed to get canvas context");
        postMessage('error');
        return;
      }

      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);

      canvas.toBlob(async (blob) => {
        if (!blob) {
          console.error("Failed to create blob");
          postMessage('error');
          return;
        }

        const file = new File([blob], 'compressed-image.jpg', { type: 'image/jpeg' });

        try {
          // Apply compression using the 'browser-image-compression' library
          const compressedFile = await imageCompression(file, options);

          postMessage(URL.createObjectURL(compressedFile));
        } catch (compressionError) {
          console.error("Compression failed:", compressionError);
          postMessage('error');
        }
      });
    };

    image.onerror = (error) => {
      console.error("Image failed to load:", error);
      postMessage('error');
    };
  } catch (error) {
    console.error("Worker error:", error);
    postMessage('error');
  }
};
