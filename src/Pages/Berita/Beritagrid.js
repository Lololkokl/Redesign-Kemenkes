import { NavLink } from "react-router-dom";

export const Beritagrid = () => {
  const news = [
    {
      id: 1,
      img: "/images/anak.jpg",
      headline: "Kasus Gagal Ginjal Akut Pada Anak Meningkat, Orang Tua Diminta Waspada",
      tanggal: "11 Juni 2023",
      link: "/berita/detail1",
    },
    {
      id: 2,
      img: "/images/hipertensi.jpg",
      headline: "Hipertensi Disebut sebagai Silent Killer, Menkes Budi Imbau Rutin Cek Tekanan Darah",
      tanggal: "10 Juni 2023",
      link: "/berita/detail2",
    },
    {
      id: 3,
      img: "/images/tbc.png",
      headline: "Deteksi TBC Capai Rekor Tertinggi di Tahun 2022",
      tanggal: "9 Juni 2023",
      link: "/berita/detail3",
    },
    {
      id: 4,
      img: "/images/tbc.png",
      headline: "Deteksi TBC Capai Rekor Tertinggi di Tahun 2022",
      tanggal: "9 Juni 2023",
      link: "/berita/detail3",
    },
    {
      id: 5,
      img: "/images/anak.jpg",
      headline: "Kasus Gagal Ginjal Akut Pada Anak Meningkat, Orang Tua Diminta Waspada",
      tanggal: "11 Juni 2023",
      link: "/berita/detail1",
    },
    {
      id: 6,
      img: "/images/hipertensi.jpg",
      headline: "Hipertensi Disebut sebagai Silent Killer, Menkes Budi Imbau Rutin Cek Tekanan Darah",
      tanggal: "10 Juni 2023",
      link: "/berita/detail2",
    },
    {
      id: 7,
      img: "/images/hipertensi.jpg",
      headline: "Hipertensi Disebut sebagai Silent Killer, Menkes Budi Imbau Rutin Cek Tekanan Darah",
      tanggal: "10 Juni 2023",
      link: "/berita/detail2",
    },
    {
      id: 8,
      img: "/images/tbc.png",
      headline: "Deteksi TBC Capai Rekor Tertinggi di Tahun 2022",
      tanggal: "9 Juni 2023",
      link: "/berita/detail3",
    },
    {
      id: 9,
      img: "/images/anak.jpg",
      headline: "Kasus Gagal Ginjal Akut Pada Anak Meningkat, Orang Tua Diminta Waspada",
      tanggal: "/berita/detail1",
      link: "/berita/detail1",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {news.map((newItem) => {
          return (
            <NavLink to={newItem.link}>
              <div className="card flex flex-col justify-center">
                <img
                  src={newItem.img}
                  alt=""
                  srcset=""
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="flex-1 mt-2">
                  <p className="sm:text-xs md:text-sm font-bold font-paragraph text-gray-900">
                    {newItem.headline}
                  </p>
                  <p className="mt-1 text-xs text-gray-500 font-paragraph">
                    {newItem.tanggal}
                  </p>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
