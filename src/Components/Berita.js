import { NavLink } from "react-router-dom";

export const Berita = () => {
  const news = [
    {
      img: "/redesign-web-kemenkes/images/3.png",
      headline: "Olahraga Efektif untuk Diet Sehat, Ini Penjelasannya",
      tanggal: "19 Juni 2023",
    },
    {
      img: "/redesign-web-kemenkes/images/4.png",
      headline: "Olahraga Efektif untuk Diet Sehat, Ini Penjelasannya",
      tanggal: "19 Juni 2023",
    },
    {
      img: "/redesign-web-kemenkes/images/5.png",
      headline: "Olahraga Efektif untuk Diet Sehat, Ini Penjelasannya",
      tanggal: "19 Juni 2023",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {news.map((newItem) => {
          return (
            <NavLink to={"/redesign-web-kemenkes/berita/detail"}>
              <div className="card flex flex-col justify-center">
                <img
                  src={newItem.img}
                  alt=""
                  srcset=""
                  className="w-full h-48 object-cover"
                />
                <div className="flex-1">
                  <p className="sm:text-xs md:text-sm font-bold">
                    {newItem.headline}
                  </p>
                  <p className="mt-2 text-xs text-gray-500">
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
