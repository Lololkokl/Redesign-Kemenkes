import { TwitterTweetEmbed } from "react-twitter-embed";
import { Berita } from "../../Components/Berita";
import { Hero } from "./Hero";

export const Home = () => {
  return (
    <div>
      <Hero />

      <div className="mx-16 md:mx-48 mt-12 mb-24">
        <h2 className="mt-12 mb-6 text-2xl font-bold text-primary font-heading">
          Berita Terbaru
        </h2>
        <Berita />
        <h2 className="mt-12 mb-6 text-2xl font-bold text-primary font-heading">
          Cuitan
        </h2>
        <div className="grid gap-12 grid-cols-1 md:grid-cols-3 ">
          <TwitterTweetEmbed tweetId="1667010400217600000" />
          <TwitterTweetEmbed tweetId="1666980949438115840" />
          <TwitterTweetEmbed tweetId="1666833953872035840" />
        </div>
      </div>
    </div>
  );
};
