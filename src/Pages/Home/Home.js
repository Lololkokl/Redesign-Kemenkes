import { Berita } from "../../Components/Berita";
import { Hero } from "./Hero";

export const Home = () => {
  return (
    <div className="mx-12 mt-6 mb-12 md:m-24">
      <Hero />
      <h2 className="mt-12 mb-6 text-2xl font-bold text-primary">
        Berita Terbaru
      </h2>
      <Berita />
    </div>
  );
};
