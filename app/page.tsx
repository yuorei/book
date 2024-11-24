import React from "react";
import InfiniteCarousel from "@/app/components/Carousel";
import { ImageItem } from "@/app/components/Carousel";
import TwitterTimeLine from "@/app/components/TwitterTimeLine";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const images: ImageItem[] = [
  { src: "https://via.placeholder.com/150", link: "/page1" },
  { src: "https://via.placeholder.com/300", link: "/page2" },
  { src: "https://via.placeholder.com/400", link: "/page3" },
  { src: "https://via.placeholder.com/500", link: "/page4" },
  { src: "https://via.placeholder.com/600", link: "/page5" },
];

interface NewsItem {
  date: string;
  title: string;
  link: string;
}

const newsItems: NewsItem[] = [
  // { date: "2021-10-01", title: "Title 1", link: "/news/1" },
  // { date: "2021-10-02", title: "Title 2", link: "/news/2" },
  // { date: "2021-10-03", title: "Title 3", link: "/news/3" },
];

const C105: React.FC = () => {
  return (
    <>
      <Header />
      <div className="relative w-full overflow-hidden mt-2">
        <InfiniteCarousel images={images} />
        <div className="flex flex-col items-center space-y-4 p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg border border-gray-300 mt-10">
          <h2 className="text-2xl font-bold text-gray-800">News</h2>
          <div className="overflow-x-auto w-full">
            <table className="table-auto w-full border-collapse">
              <tbody>
                {newsItems.map((news, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100 transition-colors`}
                  >
                    <td className="border-t border-gray-300 px-4 py-2 text-sm text-gray-700">
                      {news.date}
                    </td>
                    <td className="border-t border-gray-300 px-4 py-2 text-sm text-gray-700">
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
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mt-10 text-center">
          ABOUT
        </h2>
        <p className="text-gray-700 text-center mt-4">
          ユオレイが書いた本を紹介しています。
        </p>
      </div>
      <TwitterTimeLine url="https://twitter.com/yuorei71?ref_src=twsrc%5Etfw" />
      <Footer />
    </>
  );
};

export default C105;
