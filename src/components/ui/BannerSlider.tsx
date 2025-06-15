// src/components/ui/BannerSlider.tsx
import { useEffect, useState } from "react";

const banners = [
  { type: "image", src: "/banners/banner1.jpeg" },
  { type: "image", src: "/banners/banner2.jpeg" },
  { type: "video", src: "/banners/banner3.mp4" },
];

const BannerSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000); // 5-second rotation
    return () => clearInterval(timer);
  }, []);

  const current = banners[index];

  return (
    <div className="w-full h-56 overflow-hidden rounded-lg mb-4 bg-black">
      {current.type === "image" ? (
        <img
          src={current.src}
          alt={`Banner ${index + 1}`}
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
        />
      ) : (
        <video
          src={current.src}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default BannerSlider;
