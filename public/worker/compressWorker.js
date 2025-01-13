// public/worker/compressWorker.js
self.onmessage = async (e) => {
    const { imageUrl, options } = e.data;  // Get data from main thread
  
    try {
      const image = new Image();
      image.src = imageUrl;  // Load image
  
      image.onload = async () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);
  
        canvas.toBlob(async (blob) => {
          if (blob) {
            const file = new File([blob], 'image.jpg', {
              type: 'image/jpeg',
              lastModified: Date.now(),
            });
  
            const compressedFile = await imageCompression(file, options);
  
            // Send back the compressed image
            postMessage(URL.createObjectURL(compressedFile)); // Sending back the result to the main thread
          }
        });
      };
    } catch (error) {
      postMessage('error'); // Send error if something goes wrong
    }
  };
  