"use client";
import React, { useEffect } from "react";
import InfiniteCarousel from "@/app/components/Carousel";
import { ImageItem } from "@/app/components/Carousel";

const images: ImageItem[] = [
  { src: "https://via.placeholder.com/150", link: "/page1" },
  { src: "https://via.placeholder.com/300", link: "/page2" },
  { src: "https://via.placeholder.com/400", link: "/page3" },
  { src: "https://via.placeholder.com/500", link: "/page4" },
  { src: "https://via.placeholder.com/600", link: "/page5" },
];

const newsItems = [
  { date: "2021-10-01", title: "Title 1", link: "/news/1" },
  { date: "2021-10-02", title: "Title 2", link: "/news/2" },
  { date: "2021-10-03", title: "Title 3", link: "/news/3" },
];

const C105: React.FC = () => {
  useEffect(() => {
    // Twitterウィジェットのスクリプトを動的に読み込む
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="relative w-full overflow-hidden">
        <InfiniteCarousel images={images} />
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-bold">News</h2>
          <table className="table-auto w-full border-collapse border border-gray-200 rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border-b border-gray-300 px-4 py-2 font-semibold">
                  Date
                </th>
                <th className="border-b border-gray-300 px-4 py-2 font-semibold">
                  Title
                </th>
              </tr>
            </thead>
            <tbody>
              {newsItems.map((news, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100 transition-colors`}
                >
                  <td className="border-t border-gray-300 px-4 py-2">
                    {news.date}
                  </td>
                  <td className="border-t border-gray-300 px-4 py-2">
                    <a
                      href={news.link}
                      className="text-blue-500 hover:underline"
                    >
                      {news.title}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="m-10 md:w-1/4 md:mx-auto">
        <div className="twitter-widget-container w-full max-w-[400px] h-[500px] overflow-auto">
          <a
            className="twitter-timeline"
            href="https://twitter.com/yuorei71?ref_src=twsrc%5Etfw"
            data-height="500"
            data-theme="light"
          >
            Tweets by yuorei71
          </a>
        </div>
      </div>
    </>
  );
};

export default C105;
