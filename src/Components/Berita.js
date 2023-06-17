import { NavLink } from "react-router-dom";

export const Berita = () => {
  const news = [
    {
      img: "/images/anak.jpg",
      headline:
        "Kasus Gagal Ginjal Akut Pada Anak Meningkat, Orang Tua Diminta Waspada",
      tanggal: "11 Juni 2023",
      link: "/berita/1",
    },
    {
      img: "/images/hipertensi.jpg",
      headline:
        "Hipertensi Disebut sebagai Silent Killer, Menkes Budi Imbau Rutin Cek Tekanan Darah",
      tanggal: "10 Juni 2023",
      link: "/berita/2",
    },
    {
      img: "/images/tbc.png",
      headline: "Deteksi TBC Capai Rekor Tertinggi di Tahun 2022",
      tanggal: "9 Juni 2023",
      link: "/berita/3",
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
            //     <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            //     <img
            //       className="w-full h-auto rounded-t-xl"
            //       src={newItem.img}
            //       alt="Image Description"
            //     />
            //     <div className="p-4 md:p-5">
            //       <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            //         {newItem.headline}
            //       </h3>
            //       <p className="mt-5 text-xs text-gray-500 dark:text-gray-500">
            //         {newItem.tanggal}
            //       </p>
            //     </div>
            //   </div>
          );
        })}
      </div>
    </div>
  );
};
