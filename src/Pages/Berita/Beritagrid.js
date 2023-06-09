import { NavLink } from "react-router-dom";

export const Beritagrid = () => {
  const news = [
    {
      id: 1,
      img: "/images/3.png",
      headline: "Olahraga Efektif untuk Diet Sehat, Ini Penjelasannya",
      tanggal: "19 Juni 2023",
    },
    {
      id: 2,
      img: "/images/4.png",
      headline: "Olahraga Efektif untuk Diet Sehat, Ini Penjelasannya",
      tanggal: "19 Juni 2023",
    },
    {
      id: 3,
      img: "/images/5.png",
      headline: "Olahraga Efektif untuk Diet Sehat, Ini Penjelasannya",
      tanggal: "19 Juni 2023",
    },
    {
      id: 4,
      img: "/images/5.png",
      headline: "Olahraga Efektif untuk Diet Sehat, Ini Penjelasannya",
      tanggal: "19 Juni 2023",
    },
    {
      id: 5,
      img: "/images/5.png",
      headline: "Olahraga Efektif untuk Diet Sehat, Ini Penjelasannya",
      tanggal: "19 Juni 2023",
    },
    {
      id: 6,
      img: "/images/5.png",
      headline: "Olahraga Efektif untuk Diet Sehat, Ini Penjelasannya",
      tanggal: "19 Juni 2023",
    },
    {
      id: 7,
      img: "/images/5.png",
      headline: "Olahraga Efektif untuk Diet Sehat, Ini Penjelasannya",
      tanggal: "19 Juni 2023",
    },
    {
      id: 8,
      img: "/images/5.png",
      headline: "Olahraga Efektif untuk Diet Sehat, Ini Penjelasannya",
      tanggal: "19 Juni 2023",
    },
    {
      id: 9,
      img: "/images/5.png",
      headline: "Olahraga Efektif untuk Diet Sehat, Ini Penjelasannya",
      tanggal: "19 Juni 2023",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {news.map((newItem) => {
          return (
            <NavLink to={"/berita/detail"}>
              <div className="card flex flex-col justify-center">
                <img
                  src={newItem.img}
                  alt=""
                  srcset=""
                  className="w-full h-48 object-cover"
                />
                <div className="flex-1 mt-2">
                  <p className="sm:text-xs md:text-sm font-bold font-heading">
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
