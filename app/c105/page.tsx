"use client";
import React, { useState, useEffect } from "react";

const images = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/400",
  "https://via.placeholder.com/500",
  "https://via.placeholder.com/600",
];

const InfiniteCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // 5秒ごとに自動スライド
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 px-2 py-1 text-white bg-black rounded-full opacity-50 hover:opacity-75"
        >
          ◀
        </button>
        <div className="flex items-center justify-center w-full space-x-4">
          {[-1, 0, 1].map((offset) => {
            const index =
              (currentIndex + offset + images.length) % images.length;
            const isActive = offset === 0;
            const isSide = Math.abs(offset) === 1;

            let positionClass = "hidden";
            if (isActive) {
              positionClass = "opacity-100 scale-100 z-10";
            } else if (isSide) {
              positionClass = "opacity-75 scale-90";
            }

            return (
              <div
                key={index}
                className={`relative transform transition-all duration-500 ease-in-out ${positionClass}`}
                style={{
                  width: isActive ? "300px" : "200px",
                  height: "300px",
                }}
              >
                <img
                  src={images[index]}
                  alt={`Carousel item ${index}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            );
          })}
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 px-2 py-1 text-white bg-black rounded-full opacity-50 hover:opacity-75"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
