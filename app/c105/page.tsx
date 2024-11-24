import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

const books = [
  {
    title: "仕組みから理解するストリーミング動画配信技術",
    description: `普段利用しているストリーミング動画配信サービスはどのようにうごいているか、知りたくはないですか？
動画配信にもさまざまな技術があります。
本書ではそんなストリーミング動画配信における技術の紹介と簡易版ストリーミング動画配信サイトを作成します。

＜こんな人におすすめ＞
・ストリーミング動画配信について知りたい人
・HLSについて知りたい人
・動画配信における周辺技術について知りたい人
・動画技術について知りたい人

本書のサンプルコードリポジトリ:  https://github.com/yuorei/techbook17-video

コンテンツ
・動画について
・ストリーミング配信について
・HLSについて
・字幕について
・エンコードについて
・CDNについて
・YuoVisionについて
・簡易版動画配信サイトの作成
初出イベント: 技術書典17
ページ数: 74`,
    imageUrl: "/yuorei-cover-ebook.png",
    author: "ユオレイ",
    twitter: "yuorei71",
    genre: "技術書",
  },
];

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          コミックマーケット１０５で販売する本の紹介
        </h1>

        <div className="space-y-16">
          {books.map((book, index) => (
            <div
              key={index}
              className="flex bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={book.imageUrl}
                alt={book.title}
                layout="intrinsic"
                width={500}
                height={750}
                className="rounded-t-lg"
              />
              <div className="p-8">
                <h2 className="text-3xl font-semibold text-gray-800">
                  {book.title}
                </h2>
                <p className="mt-4 text-lg text-gray-700">{book.description}</p>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    著者: {book.author}
                  </h3>
                  <a
                    className="mt-2 text-gray-600"
                    href={`https://twitter.com/${book.twitter}`}
                  >
                    @{book.twitter}
                  </a>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    ジャンル: {book.genre}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href="https://www.comiket.co.jp/info-a/C105/C105Info.html"
            className="text-blue-500 hover:underline"
          >
            C105のページへ
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
