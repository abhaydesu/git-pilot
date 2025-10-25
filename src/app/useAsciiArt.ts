'use client';

import { useState, useEffect } from 'react';

// The set of characters used to represent shades of gray
const ASCII_CHARS = '`^\",:;Il!i~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$';
const MAX_WIDTH = 100; // Adjust for desired output width

const getCharForGrayScale = (grayScale: number) => {
  const charIndex = Math.floor((grayScale / 255) * (ASCII_CHARS.length - 1));
  return ASCII_CHARS[charIndex];
};

export const useAsciiArt = (imageUrl: string) => {
  const [asciiText, setAsciiText] = useState('');

  useEffect(() => {
    if (!imageUrl) return;

    const image = new Image();
    image.crossOrigin = 'Anonymous'; // Required for external images
    image.src = imageUrl;

    image.onload = () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      if (!context) return;

      // Resize image to fit the max width
      const aspectRatio = image.height / image.width;
      const width = MAX_WIDTH;
      const height = Math.floor(aspectRatio * width * 0.5); // Adjust height for character aspect ratio

      canvas.width = width;
      canvas.height = height;
      context.drawImage(image, 0, 0, width, height);

      const imageData = context.getImageData(0, 0, width, height);
      let asciiString = '';

      // Iterate over pixel data
      for (let i = 0; i < imageData.data.length; i += 4) {
        const [r, g, b] = [imageData.data[i], imageData.data[i + 1], imageData.data[i + 2]];
        const grayScale = 0.21 * r + 0.72 * g + 0.07 * b; // Calculate brightness
        asciiString += getCharForGrayScale(grayScale);
        if ((i / 4 + 1) % width === 0) {
          asciiString += '\n'; // Add a new line at the end of each row
        }
      }
      setAsciiText(asciiString);
    };

    image.onerror = () => {
      setAsciiText('Error: Could not load the image.');
    };
  }, [imageUrl]);

  return asciiText;
};