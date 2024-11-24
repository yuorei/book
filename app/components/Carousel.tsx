"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface ImageItem {
  src: string;
  link: string;
}

const images: ImageItem[] = [
  { src: "https://via.placeholder.com/150", link: "/page1" },
  { src: "https://via.placeholder.com/300", link: "/page2" },
  { src: "https://via.placeholder.com/400", link: "/page3" },
  { src: "https://via.placeholder.com/500", link: "/page4" },
  { src: "https://via.placeholder.com/600", link: "/page5" },
];

const InfiniteCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // 画像クリック時に遷移
  const handleImageClick = (link: string) => {
    router.push(link);
  };

  // 自動スライドの設定
  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // 5秒ごとに自動スライド
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={handlePrev}
          className="absolute left-4 z-10 px-3 py-2 text-white bg-black rounded-full opacity-50 hover:opacity-75"
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
                  width: isActive ? "100%" : "80%",
                  height: "500px",
                }}
              >
                <img
                  src={images[index].src}
                  alt={`Carousel item ${index}`}
                  className="w-full h-full object-cover rounded-lg cursor-pointer"
                  onClick={() => handleImageClick(images[index].link)}
                />
              </div>
            );
          })}
        </div>
        <button
          onClick={handleNext}
          className="absolute right-4 z-10 px-3 py-2 text-white bg-black rounded-full opacity-50 hover:opacity-75"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
