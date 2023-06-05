import { Berita } from "../Berita";
import { Hero } from "./Hero";

export const Home = () => {
  return (
    <div className="mx-24 my-24">
      <Hero />
      <h2 className="my-5 text-2xl font-bold">Berita Terbaru</h2>
      <Berita />
    </div>
  );
};
