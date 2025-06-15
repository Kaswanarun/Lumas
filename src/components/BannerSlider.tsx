import React, { useEffect, useState } from 'react';

interface BannerSliderProps {
  images: string[]; // Array of image URLs
}

/**
 * BannerSlider component: shows a rotating slideshow of banner images.
 * It automatically transitions between images every 3 seconds with a fade animation.
 */
export const BannerSlider: React.FC<BannerSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle through images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) {
    return null; // No images to show
  }

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Banner ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 
                      ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  );
};
