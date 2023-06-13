import { TwitterTweetEmbed } from "react-twitter-embed";
import { Berita } from "../../Components/Berita";
import { Hero } from "./Hero";

export const Home = () => {
  return (
    <div>
      <Hero />

      <div className="mx-16 md:mx-48 mt-12 mb-24">
        <div>
          <h2 className="mt-10 mb-4 text-2xl font-bold text-primary font-heading text-center">
            Youtube
          </h2>
          <div className="grid gap-10 grid-cols-1 place-items-center my-5">
            <div className="">
              <iframe
                className="rounded-lg"
                src="https://www.youtube.com/embed/C5GW-uLfzTA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                width="1000"
                height="565"
              ></iframe>
            </div>
          </div>
        </div>

        <h2 className="mt-10 mb-4 text-2xl font-bold text-primary font-heading">
          Berita Terbaru
        </h2>
        <Berita />

        <h2 className="mt-10 mb-2 text-2xl font-bold text-primary font-heading">
          Twitter
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
