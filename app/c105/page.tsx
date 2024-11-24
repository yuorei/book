import React from "react";
import InfiniteCarousel from "@/app/components/Carousel";
import { ImageItem } from "@/app/components/Carousel";

const images: ImageItem[] = [
  { src: "https://via.placeholder.com/150", link: "/page1" },
  { src: "https://via.placeholder.com/300", link: "/page2" },
  { src: "https://via.placeholder.com/400", link: "/page3" },
  { src: "https://via.placeholder.com/500", link: "/page4" },
  { src: "https://via.placeholder.com/600", link: "/page5" },
];

const C105: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <InfiniteCarousel images={images} />
    </div>
  );
};

export default C105;
