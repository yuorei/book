"use client";
import React, { useEffect } from "react";

interface TwitterTimeLineProps {
  url: string;
}

const TwitterTimeLine: React.FC<TwitterTimeLineProps> = ({ url }) => {
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
      <div className="m-10 md:w-1/4 md:mx-auto">
        <div className="twitter-widget-container w-full max-w-[400px] h-[500px] overflow-auto">
          <a
            className="twitter-timeline"
            href={url}
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

export default TwitterTimeLine;
